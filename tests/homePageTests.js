var config = {
  url: 'http://telluswho2.herokuapp.com/',
};

casper.test.begin('Home page tests', 6, function suite(test) {

  casper.start(config.url, function() {

    test.assertTitleMatch(/TellUsWho2/, "TellUsWho2 homepage title is the one expected");
    test.assertExists('nav.navbar', 'Navbar Exists');
    test.assertElementCount('ul.navbar-nav', 1);
    test.assertSelectorHasText('a.navbar-brand', 'TellUsWho2');
    test.assertExists('h1.brand-heading', 'TellUsWho2 brand heading exists');
    test.assertVisible('footer');

  }).run(function() {
    test.done();
  });

});


casper.test.begin('Test if research page links to NJIT\'s homepage', 1, function suite(test) {

  casper.start(config.url, function() {

    this.click('a.btn-lg:nth-child(3)');
    test.comment('Clicking the login link...');

    casper.then(function () {
      test.assertTitleMatch(/New Jersey Institute of Technology/, "NJIT's homepage title is the one expected");
    });

  }).run(function() {
    test.done();
  });

});
