//dependencies
var debug = require('debug')('express')
		, express = require('express')
		, name = "Express Test App";
var optimizely = require('@optimizely/optimizely-sdk');
var uuid = require('uuid');
var logger = require('@optimizely/optimizely-sdk/lib/plugins/logger');
var enums = require('@optimizely/optimizely-sdk/lib/utils/enums');

//optimizely specific
var datafile = require("./datafile.json");
var optlyClient =  optimizely.createInstance({
datafile: datafile,
logger: logger.createLogger({
	logLevel: enums.LOG_LEVEL.DEBUG
})
});


//app code
var app = express()

app.use(express.static(__dirname +'/public'));


var userId = uuid();
var variationKey = optlyClient.activate("messaging_test", userId);

app.get('/', function(req, res) {
  var origin = req.headers.origin
  res.header('Access-Control-Allow-Origin', origin)
  res.cookie("FSUserId", userId, { maxAge: 3600000 })
  res.sendFile(__dirname + "/index.html");
})

app.listen('3000', function() {
  console.log("app listening on port 3000! Press ^C to exit")
})
