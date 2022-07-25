import { Page } from '@playwright/test'

export class LoginPage {
	readonly page: Page

	constructor(page: Page) {
		this.page = page
	}

	async navigateToLoginScreen() {
		await this.page.goto('/')
	}

	async submitLoginForm() {
		await this.page.fill('#user-name', 'standard_user')
		await this.page.fill('#password', 'secret_sauce')
		await this.page.click('#login-button')
	}

	async submitLoginWithParameters(username: string, password: string) {
		await this.page.fill('#user-name', username)
		await this.page.fill('#password', password)
		await this.page.click('#login-button')
	}

	async assertUserIsLoggedIn() {
		await this.page.waitForSelector('.inventory_list')
	}

	async pause() {
		await this.page.waitForTimeout(3000)
	}
}
