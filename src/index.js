const express = require("express");

const app = express();

const locationService = require("./services/locationService");

app.get("/api/locations", (_, res) => {
    locationService.getLocationsAsync()
        .then(result => res.send(result))
        .catch((error) => {
            console.log(error);
            res.status(500);
        });
});

app.listen(3000);