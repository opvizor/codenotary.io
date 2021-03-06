import blogRoutes from './blog';

const title = 'Immutable Recording of Data and Processes - CodeNotary';
const description = 'Immutable recording of data and processes with CodeNotary Ledger Compliance®. On-premise or in the cloud, easy to use tamperproof ledger with cryptographic verification, processing millions of transactions a second.';

export default {
    /*
    ** ssr propery
    ** Doc: https://nuxtjs.org/guides/configuration-glossary/configuration-ssr
    */
    ssr: true,
    /*
    ** components propery
    ** Doc: https://nuxtjs.org/api/configuration-components/
    */
    components: true,
    /*
    ** Headers of the page
    */
    head: {
        title,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: description }
        ],
        link: [
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'manifest', href: '/site.webmanifest' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        'vue-slick-carousel/dist/vue-slick-carousel.css',
        'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~plugins/activecampaign', mode: 'client' },
        { src: '~plugins/vgo', mode: 'client' },
        { src: '~plugins/tawk', mode: 'client' },
        { src: '~plugins/vue-masonry-css', ssr: false },
        '~plugins/vue-slick-carousel',
        '~plugins/inkline'
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/stylelint-module
        '@nuxtjs/stylelint-module',
        // Doc: https://github.com/nuxt-community/analytics-module
        ['@nuxtjs/google-analytics', {
            id: 'UA-136167888-1'
        }]
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://content.nuxtjs.org/
        '@nuxt/content',
        // Doc: https://github.com/nuxt-community/style-resources-module
        '@nuxtjs/style-resources',
        // Doc: https://github.com/rigor789/vue-scrollto
        'vue-scrollto/nuxt',
        // Doc: https://www.npmjs.com/package/@nuxtjs/device
        '@nuxtjs/device',
        // Doc: https://github.com/vaso2/nuxt-fontawesome
        ['nuxt-fontawesome', {
            component: 'fa',
            imports: [
                {
                    set: '@fortawesome/free-solid-svg-icons',
                    icons: ['faCheckSquare', 'faCheckCircle', 'faTimesCircle', 'faBolt', 'faChevronRight']
                },
                {
                    set: '@fortawesome/free-brands-svg-icons',
                    icons: ['faFacebookSquare', 'faTwitterSquare', 'faLinkedin', 'faGithubSquare']
                }
            ]
        }]
    ],

    /*
    ** Build configuration
    */

    content: {
        dir: 'pages',
        markdown: {
            prism: {
                theme: 'prism-themes/themes/prism-dracula.css'
            }
        }
    },

    styleResources: {
        scss: ['~/assets/variables.scss']
    },

    build: {
        transpile: [
            '@inkline/inkline',
            'vue-github-button'
        ],
        filenames: {
            app: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js',
            chunk: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js'
        }
    },

    router: {
        linkExactActiveClass: '-active'
    },

    generate: {
        routes: () => {
            if (blogRoutes) {
                const map = Object.keys(blogRoutes);
                if (map && map.length) {
                    return map.map((path) => ({
                        route: `/blog/${blogRoutes[path]}`,
                        payload: path
                    }));                    
                }
            }
        }
    }
}
