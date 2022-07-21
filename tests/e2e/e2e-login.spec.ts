import { test, expect } from '@playwright/test'

test.describe.skip('Login / Logout Flow', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://zero.webappsecurity.com/')
	})

	test('Error Flow', async ({ page }) => {
		await page.click('#signin_button')
		await page.type('#user_login', 'teste')
		await page.type('#user_password', 'teste')
		await page.click('text=Sign in')

		const errorMessage = page.locator('.alert-error')
		await expect(errorMessage).toHaveText('Login and/or password are wrong.')
	})

	test('Success Flow', async ({ page }) => {
		await page.click('#signin_button')
		await page.type('#user_login', 'username')
		await page.type('#user_password', 'password')
		await page.click('text=Sign in')

		await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')
		const accountSummaryTab = page.locator('#account_summary_tab')
		await expect(accountSummaryTab).toBeVisible()

		await page.goto('http://zero.webappsecurity.com/logout.html')
		await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
	})
})
