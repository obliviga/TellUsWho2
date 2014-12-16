// Creating a casper module instance
var casper = require('casper').create({
  verbose: true,
  logLevel: "debug"
});

var config = {
  url: 'http://telluswho2.herokuapp.com/',
};

casper.start(config.url);

casper.then(function() {
  this.click('#page-top > nav > div > div.navbar-header > button');
  casper.wait(1000);
  this.click('#page-top > nav > div > div.navbar-collapse.navbar-right.navbar-main-collapse.collapse.in > ul > li:nth-child(4)');
    if (this.visible('#login-modal > div.modal-dialog > div')) {
        this.echo("I can see the modal");
    } else {
        this.echo("I can't see the modal");
    }
});

casper.run(function() {
  this.exit();
});