const {
	WebDriverWait,
	Builder,
	By,
	Key,
	until,
	Wait
} = require('selenium-webdriver');

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

		if (driver.titleIs(`${name}  - Google Search`)) {
			await driver.executeScript(
				'window.scrollTo(0, document.body.scrollHeight)'
			);
			await driver
				.findElement(By.xpath("//span[contains(text(), 'Next')]"))
				.click();
		}
		// await driver.wait(until.titleIs(`${name}  - Google Search`), 1000);
	} catch (err) {
		console.error(err);
	} finally {
		driver.quit();
		console.log('complete!');
	}
};

searchGoogle();
