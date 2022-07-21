import type { PlaywrightTestConfig } from '@playwright/test'
const config: PlaywrightTestConfig = {
	use: {
		headless: true,
		viewport: { width: 1280, height: 720 },
		ignoreHTTPSErrors: true,
		video: 'retain-on-failure',
		screenshot: 'only-on-failure',
		browserName: 'firefox',
	},
}
export default config
