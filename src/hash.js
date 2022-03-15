const { createHash } = require('crypto')

function hash(input) {
    return createHash('sha256')
        .update(input)
        .digest('hex')
}

let givenPassword = 'test123!'
let expectedPassword = 'test123!'

const hashResult = hash(givenPassword)
const expectedHash = hash(expectedPassword)

const match = expectedHash === hashResult

console.log(`given: ${hashResult}`)
console.log(`actual: ${expectedHash}`)
console.log(match ? 'Correct password' : 'Wrong password')