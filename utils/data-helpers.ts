import crypto from 'crypto'

export async function getRandomNumber() {
	return Math.floor(Math.random() * 10000 + 1)
}

export async function getRandomString() {
	return crypto.randomBytes(20).toString('hex')
}

export async function getRandomEmail() {
	return crypto.randomBytes(10).toString('hex')
}
