export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "client",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css", "swiper/swiper-bundle.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/vue-swiper.js", ssr: false },
    { src: "@/plugins/vue-teleport.js", ssr: false },
    { src: "@/plugins/vue-photoswipe.js", ssr: false },
    { src: "@/plugins/vuelidate.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/postcss8",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontawesome",
  ],

  googleFonts: {
    families: {
      Montserrat: [300, 400, 500, 600, 700],
      Roboto: [300, 400, 500, 600, 700],
    },
  },

  fontawesome: {
    icons: { solid: true, brands: true },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
