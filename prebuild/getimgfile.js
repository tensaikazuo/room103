const fs = require('fs')
const axios = require('axios')

module.exports = async function getImgParallel (imgArr) {
	try {
		console.log('Start download...')
		await Promise.all(
			imgArr.map(elem => {
				getImgFile(elem.url, elem.dest)
			})
		)
		console.log('Download finished!')
	} catch (error) {
		console.log('downloaded error', error)
	}
}

async function getImgFile (url, dest) {
	const writer = fs.createWriteStream(dest)
  const response = await axios({
		url,
		method: 'GET',
		responseType: 'stream'
	})

	response.data.pipe(writer)

	return new Promise((resolve, reject) => {
		writer.on('finish', resolve)
		writer.on('error', reject)
	})
}
