module.exports = {
  'Test language defined in html tag' : function (browser) {
    browser
      .url('https://cchoowee.github.io/todo-react/')
      .waitForElementVisible('html[lang=en]')
      .end();
  }
};

