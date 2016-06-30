// Generated by CoffeeScript 1.10.0
(function() {
  var Trello, client, key, params, token;

  key = process.env.TRELLO_KEY;

  token = process.env.TRELLO_TOKEN;

  if (!key || !token) {
    console.log('expecting process.env.TRELLO_KEY and process.env.TRELLO_TOKEN');
    process.exit(1);
  }

  Trello = require('../lib');

  client = Trello(key, token);

  params = {
    query: process.argv[2]
  };

  client.search(params).then(function(results) {
    return console.dir(results);
  })["catch"](function(err) {
    console.log('error');
    return console.dir(err.message);
  });

}).call(this);
