import { test, expect } from '@playwright/test'

test('basic test', async ({ page }) => {
	await page.goto('https://www.example.com/')
	const title = page.locator('h1')
	await expect(title).toHaveText('Example Domain')
})
