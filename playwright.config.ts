import type { PlaywrightTestConfig } from '@playwright/test'
const config: PlaywrightTestConfig = {
	reporter: [ ['list'], ['html', { open: 'never' }] ],
	use: {
		headless: true,
		viewport: { width: 1280, height: 720 },
		ignoreHTTPSErrors: true,
		video: 'retain-on-failure',
		screenshot: 'on',
		browserName: 'firefox',
		
	},
	projects: [
		{
			name: 'Chromium',
			use: { browserName: 'chromium',
		},
		},
		{
			name: 'Firefox',
			use: { browserName: 'firefox' },
		},
		{
			name: 'Webkit',
			use: { browserName: 'webkit' },
		},
	],
}
export default config
