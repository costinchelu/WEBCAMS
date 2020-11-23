let request = require("request-promise");

function get(id) {
  return request({
    url: `https://webcamstravel.p.rapidapi.com/webcams/list/webcam=${id}`,
    qs: {
      lang: "en",
      show: "webcams:player"
    },
    headers: {
      "x-rapidapi-host": "webcamstravel.p.rapidapi.com",
      "x-rapidapi-key": "b7787b0778msh94eeb64dd1e5b05p1d9b37jsn5dd986575e75"
    }
  });
}

function getWebcams(wId) {
  return new Promise((resolve, reject) => {
    get(wId)
      .then(r => {
        let res = JSON.parse(r);
        resolve(res.result.webcams.map(e => e.player.day.embed));
      })
      .catch(err => reject(err));
  });
}

module.exports.getWebcams = getWebcams;

// librarie folosită pentru autentificare și comunicare cu API-ul https://rapidapi.com/webcams.travel
// folosește pachetul request pentru autentificare cu parametrii ceruți de API
// pentru siguranță, cheia de autentificare poate fi stocată într-un fișier .env
