var config = {
  url: 'http://192.168.1.7:5000/',
};

casper.test.begin('Login tests', 1, function suite(test) {

  test.comment('Loading ' + config.url + '...');

  casper.start(config.url, function() {
    // Click login button in the nav bar
    this.click('.nav > li:nth-child(4) > a:nth-child(1)');
    test.comment('Clicking the login link...');

  });

  casper.then(function () {
    test.assertVisible('h2#myModalLabel', 'The modal header is visible.');
  });

  casper.run(function () {
    test.done();
  });

});