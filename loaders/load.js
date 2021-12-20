const {mongoCon} = require('./mongo'); //initializing mongo connection with mongoose
const {redisCon, redisClient} = require('./redis');
const session = require('./session'); //Session middleware configuration
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const router = require('../routes/router');
const {errorNotFound, errorMongo, errorHandler} = require('./error');

async function load(app){
  await mongoCon(); //connecting to MongoDB
  await redisCon(); //connecting to Redis

  app.use(compression()); //compression middleware
  app.use(helmet()); //setting helmet
  app.use(express.json()); //parse application/json body
  app.use(session(redisClient)); //setting session middleware with redisClient for storage
  app.use(router); //setting all routes
  app.use([errorNotFound, errorMongo, errorHandler]); //error handle
}

module.exports = load;