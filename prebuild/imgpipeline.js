const cleanImg = require('./cleanimg.js')
const fetchCollection = require('./getimginfo.js')
const genImgArr = require('./genimgarr.js')
const getImgFile = require('./getimgfile.js')
const dumpImgInfo = require('./dumpimginfo.js')

const targetDir = 'public/images/'

async function imgPipeline() {
  try {
    const deleteResult = await cleanImg(targetDir)
    console.log('deleted: \n', deleteResult)
    const { entries: posts } = await fetchCollection()
    const imgArr = genImgArr(posts)
    const downloadResult = await getImgFile(imgArr, targetDir)
    console.log(downloadResult)
    const dumpFileResult = await dumpImgInfo(downloadResult)
    console.log(dumpFileResult)
  } catch(error) {
    console.log('imgPipeline failed', error)
  }
}

imgPipeline()
