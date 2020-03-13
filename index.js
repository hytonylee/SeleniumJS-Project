'use strict';
const webdriver = require('selenium-webdriver');
SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;

const caps = {
	name: 'Basic Test Example',
	build: '1.0',
	version: '70',
	platform: 'Windows 10',
	screen_resolution: '1366x768',
	record_video: 'true',
	record_network: 'false',
	browserName: 'Chrome',
	username: username,
	password: authkey
};

async function basicExample() {
	try {
		var driver = new webdriver.Builder()
			.usingServer(cbtHub)
			.withCapabilities(caps)
			.build();

		await driver.get(
			'http://crossbrowsertesting.github.io/selenium_example_page.html'
		);

		await driver.getTitle().then(function(title) {
			console.log('The title is: ' + title);
		});

		driver.quit();
	} catch (err) {
		handleFailure(err, driver);
	}
}

basicExample();

function handleFailure(err, driver) {
	console.error('Something went wrong!\n', err.stack, '\n');
	driver.quit();
}
