import path from 'path'
import axios from 'axios'
import { fetchCollection } from './src/cockpit/fetch'
import { imgInfo } from './imginfo'

export default {
  getRoutes: async () => {
    const { entries: posts } = await fetchCollection()

    console.log(imgInfo)
    console.log(posts)

    return [
      {
        path: '/log',
        getData: () => ({
          posts,
          imgInfo,
        }),
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    ["react-static-plugin-mdx"],
  ],
}
