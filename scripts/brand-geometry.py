"""Generates the HOTY. wordmark / symbol geometry into SVG files.

Usage: pip install shapely && python3 scripts/brand-geometry.py public/brand
"""
import math
from shapely.geometry import Point, LineString, Polygon, box
from shapely.ops import unary_union
from shapely import affinity

S = 20          # stroke
CAP = 100
GREEN = "#16C784"
CARBON = "#0E1110"
WHITE = "#FFFFFF"


def f2(v): 
    s = f"{v:.2f}".rstrip("0").rstrip(".")
    return "0" if s in ("-0", "") else s

def sliced_O_path(cx, cy, r_out=52, stroke=S, gap=4.6, shift=2.0, angle=58):
    r_in = r_out - stroke
    a = math.radians(angle)
    dx, dy = math.cos(a), -math.sin(a)
    nx, ny = -dy, dx
    d = []
    for sign in (+1, -1):
        o = sign*gap/2
        sx, sy = sign*dx*shift, sign*dy*shift
        def pt(r, tsign):
            t = tsign*math.sqrt(r*r - o*o)
            return (cx + o*nx + t*dx + sx, cy + o*ny + t*dy + sy)
        po1, po2 = pt(r_out, +1), pt(r_out, -1)
        pi1, pi2 = pt(r_in, +1), pt(r_in, -1)
        # decide sweep: angular direction from po1 toward the normal side
        import math as m
        c = (cx+sx, cy+sy)
        a1 = m.atan2(po1[1]-c[1], po1[0]-c[0]); an = m.atan2(sign*ny, sign*nx)
        diff = (an - a1) % (2*m.pi)
        sweep = 1 if diff < m.pi else 0
        d.append(f"M{f2(po1[0])} {f2(po1[1])}A{f2(r_out)} {f2(r_out)} 0 0 {sweep} {f2(po2[0])} {f2(po2[1])}"
                 f"L{f2(pi2[0])} {f2(pi2[1])}A{f2(r_in)} {f2(r_in)} 0 0 {1-sweep} {f2(pi1[0])} {f2(pi1[1])}Z")
    return "".join(d)

def letter_H(x):
    return unary_union([box(x, 0, x+S, CAP), box(x+80-S, 0, x+80, CAP), box(x+S, 40, x+80-S, 60)]), 80


def letter_T(x):
    w = 82
    return unary_union([box(x, 0, x+w, S), box(x+w/2-S/2, S, x+w/2+S/2, CAP)]), w

def letter_Y(x):
    w = 92
    jx, jy = x + w/2, 56
    half = S/2
    # arms: flat top terminals; compute arm as polygon between two parallel lines
    def arm(tx):
        ang = math.atan2(jy - 0, jx - tx)
        # horizontal half width at top so that perpendicular thickness == S
        hw = half / math.sin(ang)
        return Polygon([(tx-hw, 0), (tx+hw, 0), (jx+hw, jy), (jx-hw, jy)])
    left = arm(x + S*0.62)
    right = arm(x + w - S*0.62)
    stem = box(jx-half, jy-8, jx+half, CAP)
    g = unary_union([left, right, stem]).intersection(box(x-20, 0, x+w+20, CAP))
    return g, w

# ---------- v2: arc-based clean output ----------
def poly_path(geom):
    polys = [geom] if geom.geom_type == "Polygon" else list(geom.geoms)
    out = []
    for p in polys:
        pts = list(p.exterior.coords)[:-1]
        out.append("M" + "L".join(f"{f2(x)} {f2(y)}" for x, y in pts) + "Z")
    return "".join(out)

def build_v2(out):
    import os, json
    x = 0
    H, w = letter_H(x); x += w + 13
    ox = x; x += 104 + 12
    T, w = letter_T(x); x += w + 3
    Y, w = letter_Y(x); x += w + 7
    dotx = x; W = x + S
    letters_d = poly_path(H) + sliced_O_path(ox + 52, 50) + poly_path(T) + poly_path(Y)
    dot_d = f"M{f2(dotx)} 80h20v20h-20Z"
    vb = f"-2 -6 {f2(W+4)} 112"
    def wm(fill):
        return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" role="img" aria-label="HOTY."><title>HOTY.</title>'
                f'<path fill="{fill}" d="{letters_d}"/><path fill="{GREEN}" d="{dot_d}"/></svg>')
    symO = sliced_O_path(44, 50, r_out=37, stroke=14.5, gap=4, shift=1.5)
    symDot = "M81.5 78.5h14.5v14.5H81.5Z"
    def sym(fill, bg=None, rx=22):
        bgel = f'<rect width="100" height="100" rx="{rx}" fill="{bg}"/>' if bg else ""
        return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="HOTY."><title>HOTY.</title>{bgel}'
                f'<path fill="{fill}" d="{symO}"/><path fill="{GREEN}" d="{symDot}"/></svg>')
    favO = sliced_O_path(46, 52, r_out=30, stroke=12.5, gap=3.6, shift=1.4)
    fav = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">'
           f'<rect width="100" height="100" rx="22" fill="{CARBON}"/>'
           f'<path fill="{WHITE}" d="{favO}"/><path fill="{GREEN}" d="M72 70h12v12H72Z"/></svg>')
    files = {"logo-dark.svg": wm(CARBON), "logo-light.svg": wm(WHITE),
             "hoty-symbol.svg": sym(CARBON), "hoty-symbol-light.svg": sym(WHITE),
             "brand-mark-square.svg": sym(WHITE, CARBON, 0), "favicon.svg": fav}
    os.makedirs(out, exist_ok=True)
    for k, v in files.items(): open(os.path.join(out, k), "w").write(v)
    json.dump({"viewBox": vb, "letters": letters_d, "dot": dot_d, "symbolO": symO, "symbolDot": symDot, "width": W},
              open(os.path.join(out, "paths.json"), "w"), indent=1)

if __name__ == "__main__":
    import sys
    build_v2(sys.argv[1] if len(sys.argv) > 1 else "brand-out")
