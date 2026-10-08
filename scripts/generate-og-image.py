#!/usr/bin/env python3
"""Generate public/og-image.jpg (1200x630) for Open Graph / social shares.

Layout: tree + brand/tagline on the left, circular portrait on the right,
with clear breathing room so the face never covers the text.
"""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
OUT = PUBLIC / "og-image.jpg"

W, H = 1200, 630
CREAM = (247, 244, 235)
PRIMARY = (45, 71, 36)
TAGLINE_COLOR = (78, 98, 72)
RING = (210, 202, 182)

BRAND_LINES = ["Legacy Life", "Management"]
TAG_LINES = ["Support Today.", "Brighter Tomorrows."]


def _font(size: int, weight: str = "Semibold") -> ImageFont.FreeTypeFont:
    candidates = [
        Path(f"/tmp/og-fonts/SourceSerif4-{weight}.ttf"),
        Path(f"/usr/share/fonts/truetype/noto/NotoSerif-{'Bold' if weight != 'Regular' else 'Regular'}.ttf"),
        Path("/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf" if weight != "Regular" else "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"),
        Path("/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf" if weight != "Regular" else "/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf"),
    ]
    # Also look for fonts shipped next to the script
    local = ROOT / "scripts" / "fonts" / f"SourceSerif4-{weight}.ttf"
    candidates.insert(0, local)
    for path in candidates:
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


def _text_size(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.ImageFont) -> tuple[int, int]:
    bbox = draw.textbbox((0, 0), text, font=font)
    return bbox[2] - bbox[0], bbox[3] - bbox[1]


def _load_tree() -> Image.Image:
    for name in ("brand-tree.webp", "brand-tree.png"):
        path = PUBLIC / name
        if path.exists():
            return Image.open(path).convert("RGBA")
    raise FileNotFoundError("public/brand-tree.webp (or .png) not found")


def _load_portrait() -> Image.Image:
    for name in ("bobbie-official-20260920.jpg", "bobbie-official.jpg"):
        path = PUBLIC / name
        if path.exists():
            return Image.open(path).convert("RGB")
    raise FileNotFoundError("public/bobbie-official-20260920.jpg not found")


def generate() -> Path:
    tree = _load_tree()
    bobbie = _load_portrait()

    font_brand = _font(52, "Semibold")
    font_tag = _font(27, "Regular")

    pad_l, pad_r = 44, 44
    portrait = 360
    gap_after_text = 72
    tree_text_gap = 28

    portrait_x = W - pad_r - portrait
    portrait_y = (H - portrait) // 2

    tree_h = 230
    tree_w = int(tree_h * (tree.width / tree.height))
    tree_scaled = tree.resize((tree_w, tree_h), Image.Resampling.LANCZOS)

    probe = ImageDraw.Draw(Image.new("RGB", (1, 1)))
    brand_sizes = [_text_size(probe, t, font_brand) for t in BRAND_LINES]
    tag_sizes = [_text_size(probe, t, font_tag) for t in TAG_LINES]
    text_w = max([w for w, _ in brand_sizes] + [w for w, _ in tag_sizes])
    brand_h = sum(h for _, h in brand_sizes) + 2 * (len(BRAND_LINES) - 1)
    tag_h = sum(h for _, h in tag_sizes) + 2 * (len(TAG_LINES) - 1)
    text_block_h = brand_h + 16 + tag_h

    group_w = tree_w + tree_text_gap + text_w
    max_group_right = portrait_x - gap_after_text
    left_zone_w = max_group_right - pad_l
    group_x = pad_l + max(0, int((left_zone_w - group_w) * 0.12))
    group_h = max(tree_h, text_block_h)
    group_y = (H - group_h) // 2

    tree_x = group_x
    tree_y = group_y + (group_h - tree_h) // 2
    text_x = tree_x + tree_w + tree_text_gap
    text_y = group_y + (group_h - text_block_h) // 2

    canvas = Image.new("RGB", (W, H), CREAM)
    draw = ImageDraw.Draw(canvas)
    canvas.paste(tree_scaled, (tree_x, tree_y), tree_scaled)

    y = text_y
    for i, line in enumerate(BRAND_LINES):
        draw.text((text_x, y), line, font=font_brand, fill=PRIMARY)
        y += brand_sizes[i][1] + 2
    y += 14
    for i, line in enumerate(TAG_LINES):
        draw.text((text_x, y), line, font=font_tag, fill=TAGLINE_COLOR)
        y += tag_sizes[i][1] + 2

    text_right = text_x + text_w
    if portrait_x - text_right < 64:
        raise RuntimeError(
            f"OG layout collision: text_right={text_right:.0f} portrait_x={portrait_x}"
        )

    bw, bh = bobbie.size
    side = min(bw, bh)
    left = (bw - side) // 2
    top = int(bh * 0.03)
    if top + side > bh:
        top = bh - side
    face = bobbie.crop((left, top, left + side, top + side)).resize(
        (portrait, portrait), Image.Resampling.LANCZOS
    )
    mask = Image.new("L", (portrait, portrait), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, portrait - 1, portrait - 1), fill=255)

    ring_pad = 10
    ring_size = portrait + ring_pad * 2
    ring = Image.new("RGBA", (ring_size, ring_size), (0, 0, 0, 0))
    rd = ImageDraw.Draw(ring)
    rd.ellipse((0, 0, ring_size - 1, ring_size - 1), fill=(*RING, 255))
    rd.ellipse((5, 5, ring_size - 6, ring_size - 6), fill=(*CREAM, 255))
    canvas.paste(ring, (portrait_x - ring_pad, portrait_y - ring_pad), ring)
    canvas.paste(face, (portrait_x, portrait_y), mask)
    draw.ellipse(
        (portrait_x, portrait_y, portrait_x + portrait - 1, portrait_y + portrait - 1),
        outline=(170, 160, 140),
        width=2,
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(OUT, "JPEG", quality=92, optimize=True)
    return OUT


if __name__ == "__main__":
    path = generate()
    print(f"Wrote {path} ({path.stat().st_size} bytes)")
