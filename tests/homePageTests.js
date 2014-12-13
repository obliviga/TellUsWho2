casper.test.begin('Page content tests', 3, function suite(test) {
    casper.start('http://domain.tld/page.html', function() {
        test.assertExists('h1.page-title');
        test.assertSelectorHasText('h1.page-title', 'Hello');
        test.assertVisible('footer');
    }).run(function() {
        test.done();
    });
});