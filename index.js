const express = require('express');
const request = require('request-promise');
const dotenv = require('dotenv');

const app = express();

dotenv.config()
const PORT = process.env.PORT || 5000;
const apiKey = process.env.SCRAPER_APIKEY;

app.use(express.json());

app.get('/',(req,res) => {
    res.send('Welcome to Amazon Scraper API');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})