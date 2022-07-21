import type { PlaywrightTestConfig } from '@playwright/test'
const config: PlaywrightTestConfig = {
	timeout: 60000,
	retries: 0,
	testDir: '../tests/e2e',
	use: {
		headless: true,
		viewport: { width: 1280, height: 720 },
		actionTimeout: 15000,
		ignoreHTTPSErrors: true,
		video: 'off',
		screenshot: 'only-on-failure',
		browserName: 'firefox',
	},
	projects: [
		{
			name: 'chromium',
			use: { browserName: 'chromium' },
		},
		{
			name: 'firefox',
			use: { browserName: 'firefox' },
		},
		{
			name: 'webkit',
			use: { browserName: 'webkit' },
		},
	],
}

export default config
