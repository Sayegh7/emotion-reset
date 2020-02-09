const PercyScript = require('@percy/script')

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:3000/')
  await percySnapshot('Reset elements')
})
