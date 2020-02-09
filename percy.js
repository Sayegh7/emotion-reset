require('dotenv').config()
const exec = require('shelljs').exec
const axios = require('axios')
exec('npm run dev', () => {})

const makeRequest = async () => {
  try {
    await axios({
      method: 'GET',
      url: 'http://localhost:3000',
    })
    return e2eStart()
  } catch (error) {
    console.log('Pinging Server Failed', error.message, new Date().getTime())
  }
  setTimeout(makeRequest, 1000)
}

makeRequest()

function e2eStart () {
  exec('npx percy exec -- node snapshots.js', function (code, stdout, stderr) {
    console.log('Program stderr:', stderr)
    console.log('Program output:', stdout)
    process.exit(code)
  })
}
