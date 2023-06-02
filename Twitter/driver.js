const { Builder, By, Key } = require("selenium-webdriver");

let driver = new Builder().forBrowser("chrome").build();

module.exports = { driver };
