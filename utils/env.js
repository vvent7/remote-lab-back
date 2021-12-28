require('dotenv').config({path: 'config/.env'});

const penv = process.env;

module.exports = {
  env: {
    MONGO_USER: penv.MONGO_USER,
    MONGO_PASS: penv.MONGO_PASS,
    MONGO_NAME: penv.NODE_ENV=='production' ? penv.MONGO_NAME : 'developing',
    REDIS_PASS: penv.REDIS_PASS,
    SESSION_NAME: penv.SESSION_NAME,
    SESSION_SECRET: penv.SESSION_SECRET,
    SESSION_MAX_AGE: parseInt(penv.SESSION_MAX_AGE),
    APP_PORT: penv.APP_PORT,
    NODE_ENV: penv.NODE_ENV
  },
  roles: ['MASTER', 'ADMIN', 'USER']
};