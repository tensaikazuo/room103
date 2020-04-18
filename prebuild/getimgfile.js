const download = require('images-downloader').images

module.exports = async function getImgFile (images, dest) {
	try {
		const result = await download(images, dest)
		return result
	} catch (error) {
		console.log('downloaded error', error)
	}
}
