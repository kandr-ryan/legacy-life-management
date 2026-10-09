#!/usr/bin/env python3
"""Assemble public/og-image.jpg from base64 part files."""
from __future__ import annotations
import base64
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
parts = sorted(PUBLIC.glob("og-image.jpg.b64.*"))
if not parts:
    print("error: no og-image.jpg.b64.* parts", file=sys.stderr)
    raise SystemExit(1)
data = base64.b64decode("".join(p.read_text().strip() for p in parts))
if data[:3] != b"\xff\xd8\xff":
    print("error: decoded data is not JPEG", file=sys.stderr)
    raise SystemExit(1)
dest = PUBLIC / "og-image.jpg"
dest.write_bytes(data)
print(f"Wrote {dest} ({len(data)} bytes) from {len(parts)} parts")
