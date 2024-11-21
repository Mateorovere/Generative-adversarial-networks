// frontend/src/components/Project1.js

import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Button,
  Box,
  LinearProgress,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import { Github, Linkedin } from 'lucide-react';
import '../Dogs.css';


function Gan() {
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/generate');
      setGeneratedImage(`data:image/png;base64,${response.data.generated_image}`);
    } catch (error) {
      console.error('Error generating image:', error);
      alert('Error generating image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" style={{ paddingTop: '50px' }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        GAN Image Generator
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
        {/* Generate Image Section */}
        <Grid item xs={12} md={6}>
          <Box textAlign="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleGenerate}
              disabled={loading}
              startIcon={<ImageIcon />}
            >
              {loading ? 'Generating...' : 'Generate Image'}
            </Button>
            {loading && <LinearProgress style={{ marginTop: '20px' }} />}
          </Box>
        </Grid>
        {/* Generated Image Section */}
        <Grid item xs={12} md={6}>
          {generatedImage && (
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Generated Image
                </Typography>
                <Box mt={2} textAlign="center">
                  <img
                    src={generatedImage}
                    alt="Generated"
                    width={224} //remove for other images that are not small (this was made because mnist images are 28*28)
                    height={224}//remove for other images that are not small
                    style={{ borderRadius: '10px' }} //style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
                  />
                </Box>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>

      <footer>
        <div className="social-links">
          <a
            href="https://github.com/Mateorovere"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mateo-rovere/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <p>Created by Mateo Rovere</p>
      </footer>
    </Container>
  );
}

export default Gan;
