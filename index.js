const { Builder, By, Key, until } = require('selenium-webdriver');

require('geckodriver');
const faker = require('faker');

const searchGoogle = async () => {
	let name = faker.name.findName();
	let driver = await new Builder().forBrowser('firefox').build();

	try {
		await driver
			.manage()
			.window()
			.maximize();
		await driver.manage().deleteAllCookies();

		await driver.get('https://www.google.com/');
		await driver.findElement(By.name('q')).sendKeys(name, Key.RETURN);

		await driver.wait(() => {
			until.titleIs(`${name}  - Google Search`);
			driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
		}, 1000);

		await driver
			.findElement(By.xpath("//span[contains(text(), 'Next')]"))
			.click();
	} catch (err) {
		console.error(err);
	} finally {
		driver.quit();
		console.log('complete!');
	}
};

searchGoogle();
