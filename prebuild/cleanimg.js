const fs = require('fs').promises

module.exports = async function cleanImg (targetDir) {
  try {
    const files = await fs.readdir(targetDir)
    const result = await deleteFile(files, targetDir)
    return result
  } catch (error) {
    console.log('deleting error', error)
  }
}

async function deleteFile (files, targetDir) {
  const regex = /^image_\d{1,4}.(png|jpe?g|gif)$/i
  const dellist = []
  for (let i = 0, len = files.length; i < len; i++) {
    const isMatch = regex.test(files[i])
    if (isMatch) {
      const path = targetDir + files[i]
      await fs.unlink(path)
      dellist.push(files[i])
    }
  }
  return dellist
}
