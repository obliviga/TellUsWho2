casper.test.begin('Login tests', 1, function suite(test) {
  // To start, load this blog post in CasperJS.
  casper.start("http://fourword.fourkitchens.com/article/simulate-user-actions-casperjs", function() {

    // Click the fourkitchens.com link in the header.
    this.click('header p a:first-child');

    // Log the click to the console so we know why it's pausing momentarily.
    test.comment('⌚️  Clicking the Fourkitchens.com link...');
  });

  casper.then(function() {
    // Check the URL to confirm that navigation was successful.
    test.assertUrlMatch(/\/\/fourkitchens\.com/, 'New location is ' + this.getCurrentUrl());
});
