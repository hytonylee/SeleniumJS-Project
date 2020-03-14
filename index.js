const webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

require('geckodriver');
const fs = require('fs');
const faker = require('faker');

const example = async () => {
	let name = faker.name.findName();

	let driver = await new webdriver.Builder().forBrowser('firefox').build();
	await driver
		.manage()
		.window()
		.maximize();
	await driver.manage().deleteAllCookies();

	await driver.get('http://google.com');
	await driver.findElement(By.name('q')).sendKeys(name, Key.RETURN);

	try {
		await driver.takeScreenshot();
		fs.writeFileSync('img.png', data, 'base64');
	} catch (err) {
		console.error(err);
	}

	driver.quit();
};

example();
