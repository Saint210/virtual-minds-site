from PIL import Image
from collections import Counter
import sys

def get_green_colors(image_path, num_colors=10):
    try:
        image = Image.open(image_path)
        image = image.convert('RGB')
        pixels = list(image.getdata())
        
        greenish_darks = []
        
        for r, g, b in pixels:
            # Criteria for "Teal/Green" Spectrum:
            # 1. Not grayscale (saturation check)
            # 2. Green is dominant or significant
            # 3. Blue can be high (for Teal), but Red should be the lowest or significantly lower
            
            if r < 100: # Still looking for darker tones, but not pitch black
                 if g > r + 10 and b > r + 10: # Distinctly cool (Green/Blue > Red)
                     if abs(g - b) < 40: # Green and Blue are somewhat balanced (Teal range) or Green is dominant
                         greenish_darks.append((r, g, b))

        counts = Counter(greenish_darks)
        print(f"Analysis for Dark Greens in: {image_path}")
        print("-" * 30)
        
        sorted_colors = counts.most_common(num_colors)
        
        for color, count in sorted_colors:
            hex_color = '#{:02x}{:02x}{:02x}'.format(color[0], color[1], color[2])
            print(f"Deep Teal/Green Concept: {hex_color} | RGB: {color} | Count: {count}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_greens.py <image_path>")
    else:
        # Check both logos
        get_green_colors(sys.argv[1])
