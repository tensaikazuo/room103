const fs = require('fs').promises
const toSource = require('to-source')

module.exports = async function dumpImgInfo(rawObj) {
  try {
    const content = 'export const imgInfo = ' + toSource(rawObj)
    await fs.writeFile('imginfo.js', content)
    console.log('Your imginfo.js is updated or created!')
  } catch (error) {
    console.log('writing error', error)
  }
}
