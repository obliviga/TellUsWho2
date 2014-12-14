var config = {
  url: 'http://telluswho2.herokuapp.com/',
};

casper.test.begin('Login tests', 1, function suite(test) {

  test.comment('Loading ' + config.url + '...');

  casper.start(config.url, function() {
    // Click login button in the nav bar
    this.click('.nav > li:nth-child(4) > a:nth-child(1)');
    test.comment('Clicking the login link...');

  });

  casper.then(function () {
    test.assertNotVisible('h2#myModalLabel', 'The modal header is visible.');
  });

  casper.run(function () {
    test.done();
  });

});
