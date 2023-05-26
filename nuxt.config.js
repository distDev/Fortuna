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
    { src: "@/plugins/vuelidate.js", ssr: true },
    { src: "@/plugins/click-outside-directive.js", ssr: false },
    { src: "@/plugins/vue-nanoid.js", ssr: false },
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
  modules: [
    "@nuxtjs/axios",
    '@nuxtjs/sitemap',
    "vue-toastification/nuxt",
    [
      "@nuxtjs/yandex-metrika",
      {
        id: process.env.YANDEX_METRIKA_ID,
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      },
    ],
  ],

  sitemap: {
    hostname: 'https://kollektiv-fortuna.ru',
    routes:  () => {
      const routes = []
  
      // Добавляем остальные страницы
      routes.push('/contact-us')
      routes.push('/faq')
      routes.push('/')
      routes.push('/order-success')
      routes.push('/order')
      routes.push('/our-contacts')
      routes.push('/privacy-policy')
      routes.push('/public-offer')
      routes.push('/returns')
      routes.push('/shipping')
      routes.push('/videos')
  
      return routes
    }
  },

  axios: {
    // proxy: true
  },

  publicRuntimeConfig: {
    tgApiKey: process.env.TELEGRAM_API_KEY,
    tgChatId: process.env.TELEGRAM_CHAT_ID,
    authToken: process.env.STRAPI_API_KEY,
    apiPath: process.env.API_PATH,
    paymentAccountId: process.env.PAYMENT_ACCOUNT_ID,
  },

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
