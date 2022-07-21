import { test, expect } from '@playwright/test'

test.describe('Feedback Form', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://zero.webappsecurity.com/')
		await page.click('#feedback')
	})

	test('Reset feedback form', async ({ page }) => {
		await page.type('#name', 'Daniela')
		await page.type('#email', 'teste@teste.com.br')
		await page.type('#subject', 'Some title')
		await page.type('#comment', 'Some message')
		await page.click("input[name='clear']")

		const nameInput = page.locator('#name')
		const commentInput = page.locator('#comment')

		expect(nameInput).toBeEmpty()
		expect(commentInput).toBeEmpty()
	})

	test('Submit feedback form', async ({ page }) => {
		await page.type('#name', 'Daniela')
		await page.type('#email', 'teste@teste.com.br')
		await page.type('#subject', 'Some title')
		await page.type('#comment', 'Some message')

		await page.click("input[name='submit']")
		await page.waitForSelector('#feedback-title')
	})
})
