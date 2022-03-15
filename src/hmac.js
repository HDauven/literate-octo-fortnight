const { createHmac } = require('crypto')

const key = 'secret-key'
const message = '42 is the meaning of life'

const hmac = createHmac('sha256', key)
                .update(message)
                .digest('hex')

const key2 = 'other-password'
const hmac2 = createHmac('sha256', key2)
                .update(message)
                .digest('hex')

console.log('hmac ', hmac)
console.log('hmac2 ', hmac2)