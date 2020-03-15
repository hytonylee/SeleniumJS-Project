const { Builder, By, Key, until } = require('selenium-webdriver');

require('geckodriver');
const fs = require('fs');
const faker = require('faker');

const example = async () => {
	let name = faker.name.findName();
	let driver = await new Builder().forBrowser('firefox').build();

	try {
		await driver
			.manage()
			.window()
			.maximize();
		await driver.manage().deleteAllCookies();

		await driver.get('http://google.com');
		await driver.findElement(By.name('q')).sendKeys(name, Key.RETURN);

		let pageTwo = driver.wait(until.elementLocated(By.id('xjs')), 20000);
		driver.switchTo().frame(pageTwo.click());
	} finally {
		// driver.quit();
		console.log('complete!');
	}
};

example();
