const http = require("http");
const request = require("request");
require("dotenv").config();

const requestListener = function (req, res) {
  res.writeHead(200);
  var options = {
    url: "https://api.twitter.com/2/users/33475281/tweets",
    method: "GET",
    headers: {
      "User-Agent": "my request",
      Authorization: `Bearer ${process.env.TWToken}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  var callback = (error, response, body) => {
    console.log(response.statusCode);
    res.end(body);
  };

  request(options, callback);
};

const server = http.createServer(requestListener);
server.listen(8080);
