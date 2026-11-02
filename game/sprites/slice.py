"""Slice an AI-generated sprite sheet into game-size PNGs.

usage: python3 slice.py raw/sheet.png SCALE prefix name1 name2 ...
  SCALE  = size of one source "pixel" block (10 for the oyster sheet, 8 for the boats)
  names  = one per sprite, in reading order (left to right, top to bottom)

Keys out the flat background, downscales by SCALE with nearest-neighbour,
finds each sprite as a connected blob, and writes prefix-name.png per blob.
"""
import sys
from collections import deque
from PIL import Image

src_path, scale, prefix, *names = sys.argv[1:]
scale = int(scale)
src = Image.open(src_path).convert('RGB')
bg = src.getpixel((5, 5))
rgba = src.convert('RGBA'); px = rgba.load(); W, H = rgba.size
for y in range(H):
    for x in range(W):
        r, g, b, _ = px[x, y]
        if abs(r - bg[0]) + abs(g - bg[1]) + abs(b - bg[2]) < 60:
            px[x, y] = (0, 0, 0, 0)
small = rgba.resize((W // scale, H // scale), Image.NEAREST); sp = small.load(); w, h = small.size

seen = [[False] * w for _ in range(h)]; blobs = []
for y in range(h):
    for x in range(w):
        if seen[y][x] or sp[x, y][3] == 0: continue
        q = deque([(x, y)]); seen[y][x] = True; pts = []
        while q:
            cx, cy = q.popleft(); pts.append((cx, cy))
            for dx in (-1, 0, 1):
                for dy in (-1, 0, 1):
                    nx, ny = cx + dx, cy + dy
                    if 0 <= nx < w and 0 <= ny < h and not seen[ny][nx] and sp[nx, ny][3]:
                        seen[ny][nx] = True; q.append((nx, ny))
        if len(pts) > 30: blobs.append(pts)

# merge blobs whose boxes overlap horizontally (a raised coin or hand is part of its character)
def box(p): xs = [x for x, _ in p]; ys = [y for _, y in p]; return [min(xs), min(ys), max(xs), max(ys)]
boxes = [box(b) for b in blobs]
merged = True
while merged:
    merged = False
    for i in range(len(boxes)):
        for j in range(i + 1, len(boxes)):
            a, b = boxes[i], boxes[j]
            if a[0] <= b[2] + 2 and b[0] <= a[2] + 2 and a[1] <= b[3] + 2 and b[1] <= a[3] + 2:
                boxes[i] = [min(a[0], b[0]), min(a[1], b[1]), max(a[2], b[2]), max(a[3], b[3])]
                del boxes[j]; merged = True; break
        if merged: break

assert len(boxes) == len(names), f'found {len(boxes)} sprites, got {len(names)} names'
# reading order: group into rows by vertical overlap, then sort by x
boxes.sort(key=lambda b: (b[1] // max(1, (h // 3)), b[0]))
for name, b in zip(names, boxes):
    tile = small.crop((b[0], b[1], b[2] + 1, b[3] + 1))
    tile.save(f'{prefix}-{name}.png'); print(f'{prefix}-{name}.png', tile.size)
