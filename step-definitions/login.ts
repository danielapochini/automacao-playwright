import { Given, When, Then, Before } from '@cucumber/cucumber'
import { LoginPage } from '../page-objects/login-page'
import { World } from '../types'

let loginPage: LoginPage

Before(async function (this: World) {
	loginPage = new LoginPage(this.page)
})

Given('I visit a login page', async function (this: World) {
	await loginPage.navigateToLoginScreen()
})

When('I fill the login form with valid credentials', async function (this: World) {
	await loginPage.submitLoginForm()
})

Then('I should see the home page', async function (this: World) {
	await loginPage.assertUserIsLoggedIn()
})

Then('I wait for 3 seconds', async function (this: World) {
	await loginPage.pause()
})

When(
	/^I fill the login form with "([^"]*)" and "([^"]*)"$/,
	async function (this: World, username: string, password: string) {
		await loginPage.submitLoginWithParameters(username, password)
	}
)
