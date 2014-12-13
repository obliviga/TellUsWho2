casper.test.begin('Home page tests', 7, function suite(test) {

  casper.start('http://telluswho2.herokuapp.com/', function() {

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