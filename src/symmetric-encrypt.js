const { createCipheriv, randomBytes, createDecipheriv } = require('crypto')

const message = 'I like octopi'
const key = randomBytes(32)
const iv = randomBytes(16)

const cipher = createCipheriv('aes256', key, iv)

// encrypt
const encryptedMessage = cipher.update(message, 'utf8', 'hex')
                        + cipher.final('hex')

// decrypt
const decipher = createDecipheriv('aes256', key, iv)
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8')
                        + decipher.final('utf-8')

console.log(encryptedMessage, decryptedMessage)