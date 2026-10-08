#!/usr/bin/env python3
"""Assemble public/og-image.jpg from base64 part files (or single .b64)."""
from __future__ import annotations
import base64
from pathlib import Path

root = Path(__file__).resolve().parents[1]
public = root / "public"
out = public / "og-image.jpg"

parts = sorted(public.glob("og-image.jpg.b64.*"))
single = public / "og-image.jpg.b64"
if parts:
    raw = "".join(p.read_text() for p in parts)
elif single.exists():
    raw = single.read_text()
else:
    raise SystemExit("No og-image.jpg.b64 parts found")
raw = "".join(raw.split())
out.write_bytes(base64.b64decode(raw))
print(f"Decoded {out} ({out.stat().st_size} bytes)")
