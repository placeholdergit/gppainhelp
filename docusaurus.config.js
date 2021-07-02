module.exports = {
  title: "GP Pain Help",
  tagline: "Helping GPs manage cancer pain in their patients",
  url: "https://gppainhelp.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "ACRRM", // Usually your GitHub org/user name.
  projectName: "gppainhelp", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "GP Pain Help",
      logo: {
        alt: "GP Pain Help Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "content/",
          activeBasePath: "content",
          label: "Content",
          position: "left",
        },
        {
          href: "https://www.health.qld.gov.au/cpcre",
          label: "CPCRE",
          position: "right",
        },
        {
          href: "https://acrrm.org.au",
          label: "ACRRM",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright ©${new Date().getFullYear()} <br /> Built by <a href="https://acrrm.org.au/">ACRRM</a> on behalf of <a href="https://www.health.qld.gov.au/cpcre">CPCRE</a>`,
    },
  },
  plugins: [
    "docusaurus-plugin-sass",
    require.resolve("docusaurus-lunr-search"),
    [
      "@docusaurus/plugin-pwa",
      {
        offlineModeActivationStrategies: ["appInstalled", "queryString"],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/logo.svg",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#099cf2",
          },
        ],
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "introduction",
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "content",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
};
