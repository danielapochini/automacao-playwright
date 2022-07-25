import { Before, BeforeAll, AfterAll, After } from '@cucumber/cucumber'
import { firefox } from 'playwright'
import { World } from './types'

var { setDefaultTimeout } = require('@cucumber/cucumber')

setDefaultTimeout(60 * 1000)

BeforeAll(async function () {
	console.log('Launch Browser')
	global.browser = await firefox.launch({
		headless: false,
	})
})

AfterAll(async function () {
	console.log('Close Browser')
	await global.browser.close()
})

Before(async function (this: World) {
	console.log('Create new context and page')
	this.context = await global.browser.newContext({
		baseURL: 'https://www.saucedemo.com/',
		ignoreHTTPSErrors: true,
	})
	this.page = await this.context.newPage()
})

After(async function (this: World) {
	console.log('Close context and page')
	await this.page.close()
	await this.context.close()
})
