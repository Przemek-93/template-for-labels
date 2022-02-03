export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'templateforlabels',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "~/node_modules/bootstrap-icons/font/bootstrap-icons.css"
],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client" },
    { src: "~/plugins/filters.js"}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/bootstrap-vue'
  ],

  env: {
    apiURL: process.env.API_URL,
    apiCategoryURL: 'category/',
    apiProductURL: 'product/',
    apiAllProductsURL: 'products/active',
    apiAllProductsByAttrURL: 'products/attributes',
    apiAttributesGroupsURL: 'attributes-groups/all',
    apiPostsURL: 'posts/',
    imageUrl: `${process.env.API_URL}/files/`,
    sliderButtonsUrl: `${process.env.API_URL}/`,
    downloadsTemplateUrl: `${process.env.API_URL}/uploads/product-files/`,
  },

  axios: {
    baseUrl: process.env.API_URL,
    proxy: true
  },

  proxy: {
    '/api/' : { target: `${process.env.API_URL}/v1`, pathRewrite: { '^/api/' : '' } }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
