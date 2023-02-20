const env = process.env;
require('dotenv').config();
console.log("env:", env.DB_USER)
const config = {
  db:{
    host:env.DB_HOST || '',
    user:env.DB_USER || '',
    password: env.DB_PASSWORD || '',
    database : env.DB_NAME || '',
    waitForConnections:true,
    connectionLimit:env.DB_CONN_LIMIT || 2,
    queueLimit:0,
    debug:env.DB_DEBUG || false
  },
  listPerPage: env.LIST_PER_PAGE || 5}
module.exports = config;