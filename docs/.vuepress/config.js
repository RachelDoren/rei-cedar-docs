module.exports = {
  base: process.env.NODE_ENV === "production" ? "/rei-cedar-docs/" : "/",
  title: "Cedar Design System | REI Co-op",
  description:
    "The Cedar Design System provides digital teams with reusable UI components based on REI’s visual language.",
  head: [
    // TODO: remove
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:400|Roboto+Mono:400"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "/cdr-fonts.css"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "/cedar.css"
      }
    ],
  ],
  ga: '',
  plugins: [
    ['@vuepress/google-analytics', { ga: 'UA-129829250-1' }]
  ],
  markdown: {
    lineNumbers: true,
    anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '#' } // generate links to headings
  },
  themeConfig: {
    logo: "/doc-site-logo.svg",
    search: false,
    nav: [
      {
        text: "Release Notes",
        items: [
          { text: "Fall 2019", link: "/release-notes/fall-2019/" },
          { text: "Summer 2019", link: "/release-notes/summer-2019/" },
          { text: "Archive", link: "/release-notes/archive/" },
        ]
      },
      {
        text: "About",
        items: [
          { text: "Cedar Design System", link: "/about/cedar-design-system/" },
          { text: "Contributing to Cedar", link: "/about/contributing-to-cedar/" },
          { text: "Browser Support", link: "/about/browser-support/" }
        ]
      },
      {
        text: "Getting Started",
        items: [
          { text: "As a Designer", link: "/getting-started/as-a-designer/" },
          { text: "As a Developer", link: "/getting-started/as-a-developer/" },
          { text: "As an Adopting Team", link: "/getting-started/as-an-adopter/"},
          { text: "Using Cedar", link: "/getting-started/using-cedar/"},
        ]
      },
      {
        text: "Foundation",
        items: [
          {
            text: "Experience Principles",
            link: "/foundation/experience-principles/"
          },
          { text: "Accessibility", link: "/foundation/accessibility/" },
          { text: "Color", link: "/foundation/color/" },
          { text: "Motion", link: "/foundation/motion/" },
          { text: "Typography", link: "/foundation/typography/" },
          { text: "Spacing", link: "/foundation/spacing/" },
        ]
      },
      {
        text: "Layout",
        items: [
          { text: "Responsive", link: "/layout/responsive/" },
          { text: "Display", link: "/layout/display/" },
        ]
      },
      {
        text: "Components",
        items: [
          { text: "Design Tokens", link: "/components/design-tokens/" },
          { text: "Component Variables", link: "/components/component-variables/" },
          { text: "Utilities", link: "/components/utilities/"},
          { text: "Accordion", link: "/components/accordion/" },
          { text: "Block Quote", link: "/components/block-quote/" },
          { text: "Breadcrumb", link: "/components/breadcrumb/" },
          { text: "Buttons", link: "/components/buttons/" },
          { text: "Call to Action", link: "/components/cta/" },
          { text: "Caption", link: "/components/caption/" },
          { text: "Checkboxes", link: "/components/checkboxes/" },
          { text: "Data Tables", link: "/components/data-tables/"},
          { text: "Grid", link: "/components/grid/" },
          { text: "Headings", link: "/components/headings/" },
          { text: "Icons", link: "/components/icon/" },
          { text: "Images", link: "/components/image/" },
          { text: "Inputs", link: "/components/input/" },
          { text: "Links", link: "/components/links/" },
          { text: "Lists", link: "/components/lists/" },
          { text: "Pagination", link: "/components/pagination/" },
          { text: "Paragraphs", link: "/components/paragraphs/" },
          { text: "Pull Quote", link: "/components/pull-quote/" },
          { text: "Radio Buttons", link: "/components/radio/" },
          { text: "Ratings", link: "/components/rating/" },
          { text: "Selects", link: "/components/selects/" },
          { text: "Tabs", link: "/components/tabs/" }
        ]
      },
      {
        text: "Icons",
        items: [
          { text: "Iconography", link: "/icons/iconography/" }
        ]
      }
    ]
  },
  configureWebpack(config) {
    // make npm link work
    if (process.env.NODE_ENV !== "production") {
      config.resolve.symlinks = false;
    }
 },
  chainWebpack(config, isServer) {
    config.resolve.alias.set("$vue", "vue/dist/vue.esm.js");
    config.module.rules.delete('svg')
    config.module
      .rule('svg')
        .test(/\.svg$/)
        .use('svg-inline-loader')
          .loader('svg-inline-loader')
          .end()
  }
};
