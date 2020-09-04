require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `毛俊的博客`,
    // Default title of the page
    siteTitleAlt: `毛俊的博客`,
    // Can be used for e.g. JSONLD
    siteHeadline: `毛俊的博客 - Jun Mao's Blog`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://maojun.xyz`,
    // Used for SEO
    siteDescription: `毛俊的中文博客`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@imaojun`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        //  time format
        formatString: `YYYY/MM/DD`,
        // copy code 
        showCopyButton: true,
        // rss title
        feedTitle: `毛俊的博客 - @maojun/JunMao's-blog`,

        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://github.com/imaojun`,
          },
          {
            name: `Stackoverflow`,
            url: `https://stackoverflow.com/users/8951465`,
          },
          {
            name: `RSS`,
            url: `https://maojun.xyz/rss`,
          },
        ],
      },
    },
    {
     resolve: `gatsby-plugin-google-adsense`,
     options: {
       publisherId: `ca-pub-6757754073707932`
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 159909996,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `毛俊的博客 - @maojun/JunMao's-blog`,
        short_name: `JunMao's-blog`,
        description: `毛俊的博客`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
