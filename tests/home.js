var casper = require('casper').create({
  verbose: true,
  logLevel: "debug"
});
var casper = new require('casper').Casper();

var config = {
  url: 'http://telluswho2.herokuapp.com/',
};

casper.start(config.url);
this.click("a.btn btn-default btn-lg");
// this.echo(this.getTitle());
