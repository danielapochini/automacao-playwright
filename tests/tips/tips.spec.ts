import { test, expect } from '@playwright/test'
import { getRandomEmail, getRandomNumber, getRandomString } from '../../utils/data-helpers'

/* 
CLI Commands 

Device Simulation
    npx playwright open --device="iPhone 11" wikipedia.org

Generate PDFs
    npx playwright pdf https://example.com my-file.pdf

Generate Customized Screenshot
    npx playwright screenshot --device='iPhone 11' --color-scheme=dark --wait-for-timeout=3000 twitter.com twitter-iphone-image.png

Change Timezone and Localization
    npx playwright open --timezone "Europe/Rome" --lang="it-IT" google.com //--geolocation="40.121, 10.123"

 */

test.describe('Tips & Tricks Section', () => {
	test('TestInfo Object', async ({ page }, testInfo) => {
		await page.goto('https://www.example.com')
		console.log(testInfo)
	})

	test('Skip browser', async ({ page, browserName }) => {
		test.skip(browserName === 'firefox', 'test skipped only on chromium')
		await page.goto('https://www.example.com')
	})

	test('Fixme annotation', async ({ page, browserName }) => {
		test.fixme(browserName === 'firefox', 'test not stable, needs revision')
		await page.goto('https://www.example.com')
	})

	const people = ['Mike', 'Judy', 'Peter', 'Elon', 'Alice']
	for (const name of people) {
		test(`Running test for ${name}`, async ({ page }) => {
			await page.goto('http://zero.webappsecurity.com/index.html')
			await page.type('#searchTerm', `${name}`)
			await page.waitForTimeout(1000)
		})
	}

	test('Mouse Movement Simulation', async ({ page }) => {
		await page.goto('https://example.com')
		await page.mouse.move(0, 0)
		await page.mouse.down()
		await page.mouse.move(0, 100)
		await page.mouse.up()
	})

	test('Multiple Browser Tabs inside 1 browser', async ({ browser }) => {
		const context = await browser.newContext()
		const page1 = await context.newPage()
		const page2 = await context.newPage()
		const page3 = await context.newPage()

		await page1.goto('https://example.com')
		await page2.goto('https://example.com')
		await page3.goto('https://example.com')

		await page1.waitForTimeout(5000)
	})

	test('Random Number', async ({ page }) => {
		await page.goto('https://example.com')

		let newNumber = await getRandomNumber()
		let newString = await getRandomString()
		let newEmail = await getRandomEmail()

		console.log(newNumber)
		console.log(newString)
		console.log(newEmail + '_test' + '@' + 'gmail.com')
	})
})
