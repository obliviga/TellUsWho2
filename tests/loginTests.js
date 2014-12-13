casper.test.begin('Login tests', 1, function suite(test) {

  casper.start('http://telluswho2.herokuapp.com/', function() {
    // Click login modal
    this.click('.page-scroll[data-target="#login-modal"]');

    test.assertVisible('#login-modal', 'This test will fail if the modal is not visible.');

  }).run(function() {
    test.done();
  });
  
});