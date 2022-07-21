import { test, expect } from '@playwright/test'

test.describe.only('Search Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://zero.webappsecurity.com/')
	})

	test('Search results', async ({ page }) => {
		await page.type('#searchTerm', 'bank')
		await page.keyboard.press('Enter')

		const numberofLinks = page.locator('li > a')
		expect(numberofLinks).toHaveCount(2)
	})
})
