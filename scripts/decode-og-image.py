#!/usr/bin/env python3
"""Decode public/og-image.jpg.b64 into public/og-image.jpg."""
from __future__ import annotations
import base64
from pathlib import Path

root = Path(__file__).resolve().parents[1]
b64_path = root / "public" / "og-image.jpg.b64"
out = root / "public" / "og-image.jpg"
raw = "".join(b64_path.read_text().split())
out.write_bytes(base64.b64decode(raw))
print(f"Decoded {out} ({out.stat().st_size} bytes)")
