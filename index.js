
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000; 

app.use(express.json());

app.get('/kshitiz', async (req, res) => {
  try {
    
    const options = {
      method: 'GET',
      url: 'https://any-anime.p.rapidapi.com/v1/anime/gif/1',
      headers: {
        'X-RapidAPI-Key': '3fa82b3121msh60993f970f09819p15c22cjsncc0b065b5f1c',
        'X-RapidAPI-Host': 'any-anime.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    const gifUrl = response.data.images[0];

   
    res.json({ url: gifUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch anime GIF URL' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
