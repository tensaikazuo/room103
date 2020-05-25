const serverUrl = 'http://mycockpit:80'

module.exports = function genImgArr (obj, targetDir) {
  const result = obj
    .filter(eachEntry => {
       return eachEntry.Picture
    })
    .reduce((prev, current) => {
      if (getImgExt(current.Picture.path)) {
        const ext = getImgExt(current.Picture.path)
        const { url, dest, id, extName } = {
          url: serverUrl + current.Picture.path,
          dest: targetDir + current._id + '.' + ext,
          id: current._id,
          extName: ext
        }
        prev.push({ url, dest, id, extName })
        return prev
      } else {
        console.log('Incorrect file extension: ', current.Picture.path)
      }
    }, [])
  return result
}

function getImgExt (filePath) {
  const dotIndex = filePath.lastIndexOf('.')
  if (dotIndex == -1) { return }
  const ext = filePath.substring(dotIndex+1)
  const regex = /^(png|jpe?g|gif)$/i
  const isMatch = regex.test(ext)
  if (isMatch) {
    return ext
  }
}
