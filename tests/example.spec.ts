import { test, expect } from '@playwright/test'

test('basic test', async ({ page }) => {
	await page.goto('https://www.example.com/')

	const title = page.locator('h1')
	await expect(title).toHaveText('Example Domain')
})

test.skip('clicking on elements', async ({ page }) => {
	await page.goto('http://zero.webappsecurity.com/')

	await page.click('#signin_button')
	await page.click('text=Sign in')

	const errorMessage = page.locator('.alert-error')
	await expect(errorMessage).toHaveText('Login and/or password are wrong.')
})

test.describe('My first test suite', () => {
	test('working with inputs', async ({ page }) => {
		await page.goto('http://zero.webappsecurity.com/')

		await page.click('#signin_button')
		await page.type('#user_login', 'teste')
		await page.type('#user_password', 'teste')
		await page.click('text=Sign in')

		const errorMessage = page.locator('.alert-error')
		await expect(errorMessage).toHaveText('Login and/or password are wrong.')
	})

	test('Assertions @myTag', async ({ page }) => {
		//npx playwright test --grep @myTag executes only this testcase
		//npx playwright test --grep-invert @myTag executes all testcase but this one

		await page.goto('https://www.example.com/')
		await expect(page).toHaveURL('https://www.example.com/')
		await expect(page).toHaveTitle('Example Domain')

		const element = page.locator('h1')

		await expect(element).toBeVisible()
		await expect(element).toHaveText('Example Domain')
		await expect(element).toHaveCount(1)

		const nonExistentElement = page.locator('h5')

		await expect(nonExistentElement).not.toBeVisible()
	})

	test('Full page Screenshot', async ({ page }) => {
		await page.goto('https://www.example.com/')
		await page.screenshot({ path: 'screenshots/screenshot.png', fullPage: true })
	})

	test.only('Single element Screenshot', async ({ page }) => {
		await page.goto('https://www.example.com/')
		const element = page.locator('h1')
		await element.screenshot({ path: 'screenshots/single-element-screenshot.png' })
	})
})
