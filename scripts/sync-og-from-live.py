#!/usr/bin/env python3
"""Download the production OG image into public/og-image.jpg.

The live site already serves the correct 1200x630 user share card
(https://legacylifemanagementllc.com/og-image.jpg, 106020 bytes).
GitHub MCP create_or_update_file UTF-8-encodes string content, so a
latin-1 binary paste of JPEG bytes is corrupted. This script pulls the
authoritative binary from production before build/deploy.
"""

from __future__ import annotations

import sys
import urllib.request
from pathlib import Path

LIVE_URL = "https://legacylifemanagementllc.com/og-image.jpg"
EXPECTED_SIZE = 106020
REPO_ROOT = Path(__file__).resolve().parents[1]
DEST = REPO_ROOT / "public" / "og-image.jpg"


def main() -> int:
    DEST.parent.mkdir(parents=True, exist_ok=True)
    req = urllib.request.Request(
        LIVE_URL,
        headers={"User-Agent": "legacy-life-management-sync-og"},
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        data = resp.read()
    if len(data) < 1000 or data[:3] != b"\xff\xd8\xff":
        print(f"error: unexpected response ({len(data)} bytes)", file=sys.stderr)
        return 1
    DEST.write_bytes(data)
    print(f"Wrote {DEST} ({len(data)} bytes) from {LIVE_URL}")
    if len(data) != EXPECTED_SIZE:
        print(
            f"warning: size {len(data)} != expected {EXPECTED_SIZE}",
            file=sys.stderr,
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
