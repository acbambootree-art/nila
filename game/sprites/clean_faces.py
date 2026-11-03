"""Hand-clean pass for the oyster sprites: flatten the shades, wipe the muddy AI face, redraw crisp features."""
from PIL import Image
INK, PINK, SKIN = (32, 22, 24, 255), (236, 150, 160, 255), (246, 210, 171, 255)
def dist(a, b): return sum(abs(a[i] - b[i]) for i in range(3))
for size in ['baby', 'medium', 'fat']:
    for expr in ['idle', 'blink', 'chomp']:
        im = Image.open(f'raw/ai-pass/oyster-{size}-{expr}.png').convert('RGBA')
        w, h = im.size
        # 1) keep the AI shades as they are (flattening them washed out the shell)
        out = im.copy(); po = out.load()
        # 2) find the face (skin-coloured pixels) and wipe any dark or pink pixels inside it
        skin = [(x, y) for y in range(h) for x in range(w) if po[x, y][3] and dist(po[x, y], SKIN) < 30]
        xs = [x for x, _ in skin]; ys = [y for _, y in skin]
        x0, x1, y0, y1 = min(xs), max(xs), min(ys), max(ys)
        for _ in range(8):
            for y in range(y0, y1 + 1):
                for x in range(x0, x1 + 1):
                    p = po[x, y]
                    if not p[3]: continue
                    isskin = dist(p, SKIN) < 30
                    nb = sum(1 for dx, dy in ((1,0),(-1,0),(0,1),(0,-1)) if 0 <= x+dx < w and 0 <= y+dy < h and dist(po[x+dx, y+dy], SKIN) < 30)
                    if not isskin and nb >= 2 and (p[0] < 140 or (p[0] > 180 and p[1] < 190 and p[0] - p[1] > 40)): po[x, y] = SKIN
        # 3) redraw features, sized by sprite class
        cx = (x0 + x1) // 2; ey = y0 + int((y1 - y0) * 0.42)
        def px(x, y, c=INK):
            if 0 <= x < w and 0 <= y < h: po[x, y] = c
        if size == 'baby':   eo, cheek, mouth = 2, (4, 1, 1), [(0, 2)]
        elif size == 'medium': eo, cheek, mouth = 3, (5, 1, 2), [(-1, 2), (0, 3), (1, 2)]
        else:                eo, cheek, mouth = 4, (7, 2, 2), [(-2, 3), (-1, 4), (0, 4), (1, 4), (2, 3)]
        tall = 2 if size != 'baby' else 1
        for s in (-1, 1):
            if expr == 'blink':
                for i in range(2 if size == 'baby' else 3): px(cx + s * eo - 1 + i, ey + 1)
            else:
                for dy in range(tall): px(cx + s * eo, ey + dy); 
                if size == 'fat': px(cx + s * eo + (1 if s > 0 else -1), ey); px(cx + s * eo + (1 if s > 0 else -1), ey + 1)
            for i in range(cheek[2]): px(cx + s * cheek[0] + (i if s > 0 else -i), ey + cheek[1], PINK)
        if expr == 'chomp':
            mw, mh = {'baby': (2, 2), 'medium': (3, 2), 'fat': (4, 3)}[size]
            for dy in range(mh):
                for dx in range(mw): px(cx - mw // 2 + dx, ey + tall + 1 + dy)
            if size != 'baby':
                for dx in range(mw - 2): px(cx - (mw - 2) // 2 + dx, ey + tall + 1 + mh - 1, PINK)
        else:
            for dx, dy in mouth: px(cx + dx, ey + dy)
        out.save(f'oyster-{size}-{expr}.png')
print('ok')
