// Creating a casper module instance
var casper = require('casper').create({

  viewportSize: {
    width: 1600,
    height: 900
  },
  verbose: true,
  logLevel: "debug"
});

var config = {
  url: 'http://192.168.1.7:5000/',
};

casper.start(config.url);

casper.then(function() {
  this.click('.nav > li:nth-child(4) > a:nth-child(1)');
  casper.wait(1000);
  // this.click('#page-top > nav > div > div.navbar-collapse.navbar-right.navbar-main-collapse.collapse.in > ul > li:nth-child(4)');

});

casper.run(function() {

  if (this.visible('.modal-content')) {
      this.echo("I can see the modal");
  } else {
      this.echo("I can't see the modal");
  }

  this.exit();
});