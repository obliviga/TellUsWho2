// Creating a casper module instance
var casper = require('casper').create({
  verbose: false,
  logLevel: "debug"
});

var config = {
  url: 'http://telluswho2.herokuapp.com/',
};

var title;

casper.start(config.url);

casper.then(function() {
  console.log(this.getCurrentUrl());
  this.click('a.btn-lg:nth-child(3)');
});

casper.run(function() {
  title = this.getTitle();
  
	if(title = "New ") {
		
	}

  this.exit();
});