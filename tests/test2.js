module.exports = {
  'Test add/remove todo element' : function (browser) {
    browser
      .url('https://cchoowee.github.io/todo-react/')
      .waitForElementVisible('body')
      .assert.titleContains('React App')
      .assert.visible('input[type=text]')
      .saveScreenshot('./initial-ss.png')
      .pause(1000)
      .setValue('input[type=text]', 'this is another todo')
      .assert.visible('input[type=submit]')
      .pause(1000)
      .click('input[type=submit]')
      .saveScreenshot('./add-todo-ss.png')
      .pause(1000)
      .assert.containsText('body', 'this is another todo')
      .useXpath()
      .assert.visible("//li//span[text()='this is another todo']")
      .click("//li//span[text()='this is another todo']/preceding-sibling::button")
      .pause(1000)
      .assert.not.elementPresent("//li//span[text()='this is another todo']")
      .saveScreenshot('./remove-todo-ss.png')
      .end();
  }
};

