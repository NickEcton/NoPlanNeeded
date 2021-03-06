const express = require('express');
const router = express.Router();
const axios = require('axios');


//work on this! 
router.get('/Eventful/:id', (req, res) => {
  axios({
    method: 'GET',
    url: `http://api.eventful.com/json/events/get?app_key=VQSPqhzDdNq9cW4t&id=${req.params.id}`,
  }).then(response => {
    res.send(response.data);
  })
});

router.get('/new/Eventful/:category/:location', (req, res) => {
  
  axios({
    method: 'GET',
    url: `http://eventful.com/json/events/?app_key=VQSPqhzDdNq9cW4t&q=${req.params.category}&location=${req.params.location}&date=Today`,
  }).then(response => {
    
    res.send(response.data) 
  })
})

router.get(`/GooglePlace/:ref`, (req, res) => {
  axios({
    method: "GET",
    url: `https://maps.googleapis.com/maps/api/place/photo?key${process.env.REACT_APP_GOOGLE_MAPS_API}&photoreference=${
      req.params.ref
    }&maxheight=300`
  }).then(response => {
    res.send(response.data);
  });
})

router.get('/new/GooglePlaces/:type/:location', (req, res) => {
  
  axios({
    method: "GET",
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.REACT_APP_GOOGLE_MAPS_API}&location=${
      req.params.location
    }&type=${req.params.type}&radius=10000`
  }).then(response => {
    res.send(response.data);
  });
})

router.get('/hiking/:loc1/:loc2', (req, res) => {
  axios({
    method: 'GET',
    url: `https://www.hikingproject.com/data/get-trails?lat=${req.params.loc1}&lon=${req.params.loc2}&key=200376730-1322e2d6ca80c8e55d1a282398106088&maxDistance=200`
  }).then(response => {
    res.send(response.data);
  })
 });
 
 router.get('/tour/:location', (req, res) => {
   
  axios({
    method: 'GET',
    url: `https://api.izi.travel/mtg/objects/search?form=short&type=tour&includes=location&except=city,country,publisher&languages=en&lat_lon=${req.params.location}&radius=10000&api_key=ff1c5c19-1fd2-4383-a810-3cebbf5819e6`
  }).then(response => {
    
    res.send(response.data);
  })
 });
 
 router.get('/predict/:location', (req, res) => {
  axios({
    method: 'GET',
    url: `https://api.predicthq.com/v1/events/?limit=5&within=15km@${req.params.location}`,
    headers: {
      Authorization: 'Bearer wEdKqev9Hvs8OxVAzaIhZnqpTfhDjW'
    }
  }).then(response => {
    res.send(response.data);
  })
 });
 
 router.get('/tour/image/:pic_cp/:pic_uuid', (req, res) => {

  axios({
    method: 'GET',
    url: `https://media.izi.travel/${req.params.pic_cp}/${req.params.pic_uuid}_800x600.jpg`
  }).then(response => {
    res.send(response.data);
  })
 });

module.exports = router;

