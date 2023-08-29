// // nuxt.config.ts
// import vuetify from 'vite-plugin-vuetify'

// export default defineNuxtConfig({
//  // 생략
//   css: [
//     '@mdi/font/css/materialdesignicons.css',
//     'vuetify/lib/styles/main.sass'
//   ],
//   components: [
//     {
//       path: '~/components',
//       pathPrefix: false
//     }
//   ],
//   modules: [
//     async (options, nuxt) => {
//       nuxt.hooks.hook('vite:extendConfig', (config) =>
//         // @ts-ignore
//         config.plugins.push(
//           vuetify({
//             autoImport: true,
//             styles: {
//               configFile: 'assets/scss/settings.scss'
//             }
//           })
//         )
//       )
//     }
//   ],
//   vite: {
//     define: {
//       'process.env.DEBUG': false
//     },
//   },
//   build: { transpile: ['vuetify'] },
//   sourcemap: {
//     server: false,
//     client: false
//   }
// })
import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  ssr:true,
  css: ['vuetify/lib/styles/main.sass','@mdi/font/css/materialdesignicons.min.css',],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  components: [
        {
          path: '~/components',
          pathPrefix: false
        }
      ],
  modules: [
    // async (options, nuxt) => {
    //   nuxt.hooks.hook('vite:extendConfig', (config) =>
    //     // @ts-ignore
    //     config.plugins.push(
    //       vuetify({
    //         autoImport: true,
    //         styles: {
    //           configFile: 'assets/scss/settings.scss'
    //         }
    //       })
    //     )
    //   )
    // }
  ],
  sourcemap: {
        server: false,
        client: false
      }
})