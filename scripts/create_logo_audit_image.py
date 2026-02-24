from PIL import Image, ImageDraw, ImageFont
import os

def create_logo_audit(logo_path, output_path):
    try:
        if not os.path.exists(logo_path):
            print(f"Error: Logo file not found at {logo_path}")
            return

        # Load Logo
        logo = Image.open(logo_path).convert("RGBA")
        
        # Create Canvas (Logo width + Swatch Panel width)
        padding = 50
        swatch_panel_width = 400
        canvas_width = logo.width + swatch_panel_width + (padding * 3)
        canvas_height = max(logo.height, 600) + (padding * 2)
        
        canvas = Image.new("RGB", (canvas_width, canvas_height), "white")
        draw = ImageDraw.Draw(canvas)

        # Paste Logo
        canvas.paste(logo, (padding, padding), logo)
        
        # Draw Swatches
        start_x = logo.width + (padding * 2)
        start_y = padding
        
        colors = [
            {"hex": "#001432", "name": "Trust Navy (Primary)", "desc": "Found in Logo Text/Dark Elements"},
            {"hex": "#B4500A", "name": "Burnt Orange (Accent)", "desc": "Found in Logo Icon/Highlight"},
            {"hex": "#508C6E", "name": "Deep Sage (Secondary)", "desc": "Found in Secondary Elements"}
        ]
        
        # Title
        try:
            font_title = ImageFont.truetype("arial.ttf", 36)
            font_hex = ImageFont.truetype("arial.ttf", 24)
            font_desc = ImageFont.truetype("arial.ttf", 16)
        except:
             # Fallback to default if arial fails
            font_title = ImageFont.load_default()
            font_hex = ImageFont.load_default()
            font_desc = ImageFont.load_default()

        draw.text((start_x, start_y), "Logo DNA Analysis", fill="#333", font=font_title)
        
        y_offset = start_y + 80
        
        for color in colors:
            # Draw Color Box
            box_size = 100
            draw.rectangle([start_x, y_offset, start_x + box_size, y_offset + box_size], fill=color["hex"], outline="#ccc")
            
            # Draw Text
            text_x = start_x + box_size + 20
            draw.text((text_x, y_offset + 10), color["hex"], fill="#333", font=font_hex)
            draw.text((text_x, y_offset + 40), color["name"], fill="#555", font=font_desc)
            draw.text((text_x, y_offset + 65), color["desc"], fill="#999", font=font_desc)
            
            y_offset += box_size + 40

        # Save
        canvas.save(output_path)
        print(f"Audit image saved to: {output_path}")

    except Exception as e:
        print(f"Error creating audit image: {e}")

if __name__ == "__main__":
    create_logo_audit("public/images/logo.png", "public/logo_audit_proof.png")
