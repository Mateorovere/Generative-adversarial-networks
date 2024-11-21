# Generative Adversarial Network (GAN) Image Generator



## Introduction
Welcome to the GAN Image Generator project! This application allows users to generate images using a Generative Adversarial Network (GAN) through a web interface. The frontend is built with React and Material-UI, while the backend uses Flask and TensorFlow to load and run the GAN model.

This project demonstrates the integration of machine learning models into web applications, containerization with Docker, and the orchestration of services using Docker Compose.

---

## Features
Image Generation: Generate images using a pre-trained GAN model.
Web Interface: User-friendly frontend built with React and Material-UI.
RESTful API: Backend API built with Flask to handle image generation requests.
Dockerized: Both frontend and backend are containerized for easy deployment.
Cross-Origin Support: Enabled CORS for seamless communication between frontend and backend.

---

## Project Structure
```plaintext
GAN/
├── backend/
│   ├── app.py
│   ├── generator_model.h5
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── Gan.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── Dogs.css
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md
```
---

## Prerequisites

- Docker: Install Docker Engine here.
- Docker Compose: Install Docker Compose here.
- Git: (Optional) For cloning the repository.

---


## Setup and Usage

### 1. Clone the Repository
```bash
git clone https://github.com/Mateorovere/Generative-adversarial-networks.git
cd Generative-adversarial-networks

```

### 2. Build and Run with Docker Compose

From the project root directory, run:

```bash
docker-compose up --build

```

---

## Usage

### Access the Application

- Open your web browser and navigate to http://localhost:3000

### Generate an Image

- Click on the "Generate Image" button.
- Wait for the image to be generated.
- The generated image will appear on the right side of the screen.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the Repository

Click on the 'Fork' button on the top right corner of the repository page.

2. Clone Your Fork

```bash

git clone https://github.com/Mateorovere/Generative-adversarial-networks.git
cd your-repository

```

3. Create a New Branch

```bash

git checkout -b feature/your-feature-name

```

4. Make Changes

Implement your feature or bug fix.

5. Commit Changes

```bash

git commit -am 'Add new feature'

```

6. Push to Your Fork

```bash

git push origin feature/your-feature-name

```

7. Create a Pull Request

---

##Future improvements:

- An upgraded model for MNIST

- Currently is only generating MNIST digits, in the future there will be more models to generate more things 
