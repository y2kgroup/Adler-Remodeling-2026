import cv2
import numpy as np
import os

os.makedirs('public/brands', exist_ok=True)
img_path = 'Uploads/Windows and doors brand/Gemini_Generated_Image_3momw23momw23mom.jpeg'

print(f"Processing image: {img_path}")
img = cv2.imread(img_path)

if img is None:
    print("Error: Could not load image.")
    exit(1)

gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
_, thresh = cv2.threshold(gray, 240, 255, cv2.THRESH_BINARY_INV)

# Find contours
contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

count = 0
for c in contours:
    x, y, w, h = cv2.boundingRect(c)
    # Filter out very small noise or full-page bounds
    if w > 100 and h > 50 and w < img.shape[1] * 0.9:
        cropped = img[y:y+h, x:x+w]
        
        # Optionally add a small white padding so things aren't tight to the box
        pad = 20
        padded = cv2.copyMakeBorder(cropped, pad, pad, pad, pad, cv2.BORDER_CONSTANT, value=[255, 255, 255])
        
        cv2.imwrite(f'public/brands/logo_{count}.jpg', padded)
        count += 1

print(f"Successfully cropped {count} logos.")
