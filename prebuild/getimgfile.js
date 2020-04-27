const download = require('images-downloader').images

module.exports = async function getImgFile (images, dest) {
	try {
		const destDL = dest.slice(0, -1)
		const result = await download(images, destDL)
		return result
	} catch (error) {
		console.log('downloaded error', error)
	}
}
