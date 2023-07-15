// require('dotenv').config();
const server = require("./app")
const { conn } = require('./DB_connection')

server.listen(3001, async () => {
    await conn.sync({ force: false })
    console.log("Server raised in port 3001");
})