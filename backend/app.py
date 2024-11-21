# backend/app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from tensorflow.keras.models import load_model
import numpy as np
import base64
import io
from PIL import Image

app = Flask(__name__)
CORS(app)

# Load the generator model
generator = load_model('generator_model.h5')

NOISE_DIM = 100

@app.route('/generate', methods=['POST'])
def generate_image():
    # Generate random noise
    noise = tf.random.normal([1, NOISE_DIM])
    # Generate image
    generated_image = generator(noise, training=False)
    # Rescale the image to [0, 255]
    generated_image = (generated_image[0, :, :, 0] * 127.5 + 127.5).numpy().astype(np.uint8)
    # Convert to PIL Image
    img = Image.fromarray(generated_image, 'L')
    # Save to buffer
    buffered = io.BytesIO()
    img.save(buffered, format="PNG")
    # Encode as base64
    img_str = base64.b64encode(buffered.getvalue()).decode()
    return jsonify({'generated_image': img_str})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
