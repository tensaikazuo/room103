const serverUrl = 'http://mycockpit:80'

module.exports = function genImgArr (obj) {
  const result = obj
    .filter(eachEntry => {
       return eachEntry.Picture
    })
    .map(eachEntry => {
        const imgPath = eachEntry.Picture.path
        const imgPathMod = serverUrl + imgPath
        return imgPathMod
    })
  return result
}
