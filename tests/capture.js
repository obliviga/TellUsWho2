// set the viewport size to include all our page content.
casper.options.viewportSize = {width: 1600, height: 900};
 
casper.test.begin("Capture an image of the browser view", function(test) {
    // step 1: open the page.
    casper.start("http://telluswho2.herokuapp.com", function() {
        // do an example test.
        test.assertTitle("TellUsWho2");
    });
 
    // step 2: take some screenshots.
    casper.then(function() {
        this.click('.page-scroll[data-target="#login-modal"]');
        casper.capture("page.png");
    });
 
    // actually run the steps we defined before.
    casper.run(function() {
        test.done();
    });
});