const fetchCollection = require('./getimginfo.js')
const genImgArr = require('./genimgarr.js')
const getImgParallel = require('./getimgfile.js')
const dumpImgInfo = require('./dumpimginfo.js')

const targetDir = 'public/images/log/'

async function imgPipeline() {
  try {
    const { entries: posts } = await fetchCollection()
    const imgArr = genImgArr(posts, targetDir)
    console.log(imgArr)
    await getImgParallel(imgArr)
    await dumpImgInfo(imgArr)
  } catch (error) {
    console.log('imgPipeline failed', error)
  }
}

imgPipeline()
