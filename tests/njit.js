// Creating a casper module instance
var casper = require('casper').create({
  verbose: false,
  logLevel: "debug"
});

var config = {
  url: 'http://192.168.1.7:5000/',
};

casper.start(config.url);

casper.then(function() {
  console.log(this.getCurrentUrl());
  this.click('a.btn-lg:nth-child(3)');
});

casper.run(function() {
  njitTitle = "New Jersey Institute of Technology";
  
  if(njitTitle = this.getTitle()) {
  	console.log("'Visit TellUsWho2 Research Page' link goes to njit's website. TEST PASSED!");
  } else {
  	console.log("'Visit TellUsWho2 Research Page' link DOES NOT go to njit's website. TEST FAILED.");
  }
  this.exit();
});