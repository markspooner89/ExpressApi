require("dotenv").config();

const axios = require("axios");

module.exports = axios.create({
    baseURL: "https://api.jsonbin.io/v3/b/",
    timeout: 1000,
    headers: {
        "X-Master-Key": process.env.JSON_BIN_KEY
    }
});