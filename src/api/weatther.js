const express = require('express');
const axios = require('axios');

const router = express.Router();


const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?`

router.get('/', async (req, res, next) => {
    const { city } = req.query;
    // make a request to weather api
    try {
        const params = {
            units: "metric",
            api_key: process.env.OPENWEATHER_APIKEY
        }

        params.q = city === undefined ? "naivasha,kenya" : city
        const { data } = await axios.get(`${BASE_URL}q=${params.q}&units=${params.units}&APPID=${params.api_key}`)
        // console.log(data)
        console.log(data)

        // respond with data from openweather api
        res.json(data)

    } catch (error) {
        next(error)
    }
});

module.exports = router;
