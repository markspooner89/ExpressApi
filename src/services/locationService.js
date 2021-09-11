const jsonbinService = require("./jsonbinService");

const getLocationsAsync = () => {
    return new Promise((resolve, reject) => {
        jsonbinService.get("613d127baa02be1d44467e97/latest")
            .then(result => resolve(result.data.record))
            .catch(error => reject(error));
    });
}

module.exports = {
    getLocationsAsync
};