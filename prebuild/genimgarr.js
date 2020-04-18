const imgArr = []
const serverUrl = 'http://localhost:8080'

module.exports = function genImgArr (obj) {
  obj.map(eachEntry => {
    if (eachEntry.Picture) {
      const imgPath = eachEntry.Picture.path
      const imgPathMod = serverUrl + imgPath
      imgArr.push(imgPathMod)
      return imgArr
    }
  })
  return imgArr
}
