from PIL import Image
from collections import Counter
import sys

def get_dominant_colors(image_path, num_colors=5):
    try:
        image = Image.open(image_path)
        image = image.convert('RGB')
        # Resize for faster processing
        image = image.resize((150, 150))
        pixels = list(image.getdata())
        
        # Simple color quantization by rounding
        quantized_pixels = []
        for r, g, b in pixels:
             quantized_pixels.append((
                 (r // 10) * 10,
                 (g // 10) * 10,
                 (b // 10) * 10
             ))

        counts = Counter(quantized_pixels)
        total_pixels = len(quantized_pixels)
        
        print(f"Analysis for: {image_path}")
        print("-" * 30)
        
        sorted_colors = counts.most_common(num_colors)
        
        for color, count in sorted_colors:
            percentage = (count / total_pixels) * 100
            hex_color = '#{:02x}{:02x}{:02x}'.format(color[0], color[1], color[2])
            print(f"Color: {hex_color} | RGB: {color} | Coverage: {percentage:.1f}%")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_colors.py <image_path>")
    else:
        get_dominant_colors(sys.argv[1])
