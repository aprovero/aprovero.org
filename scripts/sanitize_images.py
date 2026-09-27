import os
from PIL import Image, ImageDraw, ImageFont

font_sm = ImageFont.truetype('C:/Windows/Fonts/segoeui.ttf', 11)
font_bold_sm = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 11)
font_regular = ImageFont.truetype('C:/Windows/Fonts/segoeui.ttf', 13)
font_bold = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 13)
font_hdr = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 16)
font_avatar = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 20)

OUT_DIR = r'd:\Projects\Github\aprovero.org\public\work\latnovva'
os.makedirs(OUT_DIR, exist_ok=True)

# -------------------------------------------------------------
# 1. ATTENDANCE OVERVIEW (media_1788488544258.png)
# -------------------------------------------------------------
def sanitize_attendance():
    src = r'C:\Users\aprov\.gemini\antigravity\brain\tempmediaStorage\media_1788488544258.png'
    im = Image.open(src).convert('RGB')
    draw = ImageDraw.Draw(im)

    rows = [
        (533, 552, 'MENDOZA RIVERA CARLOS', 'PRJ-MX-CENTRAL'),
        (573, 592, 'HERNANDEZ SILVA DANIEL', 'PRJ-MX-NORTH'),
        (614, 633, 'ORTIZ RAMIREZ MIGUEL A.', 'PRJ-MX-NORTH'),
        (654, 673, 'TORRES SALGADO JORGE', 'PRJ-MX-NORTH'),
        (695, 714, 'VAZQUEZ LOPEZ CESAR', 'PRJ-MX-NORTH'),
        (736, 755, 'GUTIERREZ ROJAS JUAN', 'PRJ-MX-CENTRAL'),
        (776, 795, 'CASTRO MORALES ALEJANDRO', 'PRJ-MX-NORTH'),
    ]

    for top, bottom, name, proj in rows:
        draw.rectangle([115, top, 275, bottom], fill=(255, 255, 255))
        draw.text((118, top + 2), name, fill=(30, 41, 59), font=font_bold_sm)

        draw.rectangle([285, top, 395, bottom], fill=(255, 255, 255))
        draw.text((288, top + 3), proj, fill=(148, 163, 184), font=font_bold_sm)

    out_path = os.path.join(OUT_DIR, 'attendance-overview.png')
    im.save(out_path, quality=95)
    print(f'Saved sanitized attendance overview to: {out_path}')


# -------------------------------------------------------------
# 2. PERSONNEL & ASSIGNMENT (media_1788488526389.png)
# -------------------------------------------------------------
def sanitize_personnel():
    src = r'C:\Users\aprov\.gemini\antigravity\brain\tempmediaStorage\media_1788488526389.png'
    im = Image.open(src).convert('RGB')
    draw = ImageDraw.Draw(im)

    # 1. Avatar letter box 'C' -> 'J'
    draw.rectangle([276, 195, 314, 245], fill=(231, 245, 243))
    draw.text((285, 203), 'J', fill=(14, 116, 107), font=font_avatar)

    # 2. Header title & subtitle
    draw.rectangle([320, 198, 570, 224], fill=(255, 255, 255))
    draw.text((322, 200), 'ORTEGA RAMOS JAVIER', fill=(15, 23, 42), font=font_hdr)

    draw.rectangle([320, 224, 520, 246], fill=(255, 255, 255))
    draw.text((322, 226), 'SUPERVISOR DE CAMPO', fill=(13, 148, 136), font=font_bold_sm)

    # 3. Pill #EMP-514 -> #EMP-4028
    draw.rectangle([450, 245, 510, 268], fill=(241, 245, 249))
    draw.text((453, 249), '#EMP-4028', fill=(100, 116, 139), font=font_sm)

    # 4. Form inputs
    # Nombre Completo
    draw.rectangle([280, 363, 500, 383], fill=(255, 255, 255))
    draw.text((282, 364), 'ORTEGA RAMOS JAVIER', fill=(30, 41, 59), font=font_regular)

    # Cargo / Puesto
    draw.rectangle([280, 433, 460, 453], fill=(255, 255, 255))
    draw.text((282, 435), 'SUPERVISOR DE CAMPO', fill=(30, 41, 59), font=font_regular)

    # ID de Empleado
    draw.rectangle([640, 433, 730, 453], fill=(255, 255, 255))
    draw.text((642, 435), 'EMP-4028', fill=(30, 41, 59), font=font_regular)

    # Email Address
    draw.rectangle([280, 503, 500, 523], fill=(255, 255, 255))
    draw.text((282, 505), 'j.ortega@operaciones.latnovva.internal', fill=(30, 41, 59), font=font_regular)

    # Phone Number
    draw.rectangle([280, 573, 420, 593], fill=(255, 255, 255))
    draw.text((282, 575), '+52 55 •••• 9102', fill=(30, 41, 59), font=font_regular)

    # 5. Selected Card 1 in sidebar:
    draw.rectangle([48, 250, 75, 275], fill=(21, 128, 120))
    draw.text((56, 253), 'J', fill=(255, 255, 255), font=font_bold)

    draw.rectangle([78, 246, 175, 282], fill=(14, 91, 86))
    draw.text((80, 248), 'ORTEGA RAMOS J.', fill=(255, 255, 255), font=font_bold_sm)
    draw.text((80, 265), 'SUPERVISOR CAMPO', fill=(167, 243, 208), font=font_sm)

    out_path = os.path.join(OUT_DIR, 'personnel-assignment.png')
    im.save(out_path, quality=95)
    print(f'Saved sanitized personnel view to: {out_path}')


# -------------------------------------------------------------
# 3. ATTENDANCE VALIDATION (clockout_desktop.png)
# -------------------------------------------------------------
def sanitize_punch_validation():
    src = r'D:\Projects\Github\LATNOVVA ServiceTool\manual de uso LatnovvaMX\images\clockout_desktop.png'
    im = Image.open(src).convert('RGB')
    draw = ImageDraw.Draw(im)

    # 1. Project badge inside green card:
    draw.rectangle([865, 316, 1050, 336], fill=(13, 169, 118))
    draw.text((868, 318), 'PRJ-SOLAR-04 · Substation Phase 2', fill=(240, 253, 250), font=font_bold_sm)

    # 2. Select Project dropdown:
    draw.rectangle([865, 483, 1050, 506], fill=(255, 255, 255))
    draw.text((867, 486), 'PRJ-SOLAR-04 · Substation Phase 2', fill=(30, 41, 59), font=font_regular)

    # 3. Marcajes de hoy (sanitize coordinates & user):
    # Entrada
    draw.rectangle([900, 824, 1070, 842], fill=(255, 255, 255))
    draw.text((902, 826), '24.1824° N, 102.8711° W', fill=(13, 148, 136), font=font_sm)

    # Salida
    draw.rectangle([900, 903, 1070, 919], fill=(255, 255, 255))
    draw.text((902, 904), '24.1824° N, 102.8711° W', fill=(13, 148, 136), font=font_sm)

    # 4. Bottom left user profile:
    draw.rectangle([70, 888, 185, 930], fill=(249, 250, 251))
    draw.text((72, 890), 'Field Technician', fill=(15, 23, 42), font=font_bold)
    draw.text((72, 910), 'Field Crew 04', fill=(100, 116, 139), font=font_sm)

    out_path = os.path.join(OUT_DIR, 'attendance-validation.png')
    im.save(out_path, quality=95)
    print(f'Saved sanitized attendance validation to: {out_path}')


# -------------------------------------------------------------
# 4. COMMERCIAL PORTAL ASSETS
# -------------------------------------------------------------
def copy_commercial_assets():
    src_map = r'D:\Projects\Github\LATNOVVA ServiceTool\public\latnovva-esp\map_check_11018.png'
    im_map = Image.open(src_map)
    out_map = os.path.join(OUT_DIR, 'commercial-portal-footprint.png')
    im_map.save(out_map)
    print(f'Saved commercial portal footprint to: {out_map}')

    src_cap = r'D:\Projects\Github\LATNOVVA ServiceTool\public\latnovva-esp\slide_05.png'
    im_cap = Image.open(src_cap)
    out_cap = os.path.join(OUT_DIR, 'commercial-portal-presentation.png')
    im_cap.save(out_cap)
    print(f'Saved commercial portal presentation to: {out_cap}')


if __name__ == '__main__':
    sanitize_attendance()
    sanitize_personnel()
    sanitize_punch_validation()
    copy_commercial_assets()
    print('All visual assets processed successfully!')
