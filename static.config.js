import path from 'path'
import axios from 'axios'
import { fetchCollection } from './src/cockpit/fetch'

export default {
  getRoutes: async () => {
    const { entries: posts } = await fetchCollection()

    console.log(posts)

    return [
      {
        path: '/log',
        getData: () => ({
          posts,
        }),
        /*
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          template: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
        */
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
    // ['change-build-path'],
  ],
}
