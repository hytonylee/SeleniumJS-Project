const { Builder, By, Key, until, Wait } = require('selenium-webdriver');

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

		await driver.get('http://google.com');
		await driver.findElement(By.name('q')).sendKeys(name, Key.RETURN);
		// await driver.wait(until.titleIs(name), 1000);
		await driver
			.findElement(
				By.xpath(
					'//html/body/div[8]/div[3]/div[8]/div[1]/div[2]/div/div[5]/div/span[1]/div/table/tbody/tr/td[12]/a/span[2]'
				)
			)
			.click();
	} catch (err) {
		console.error(err);
	} finally {
		// driver.quit();
		console.log('complete!');
	}
};

searchGoogle();
