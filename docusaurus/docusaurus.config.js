module.exports = {
  title: "RMUIF",
  tagline:
    "Supercharged version of Create React App with all the bells and whistles",
  url: "https://docs.rmuif.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "phoqe",
  projectName: "rmuif-docs",
  themeConfig: {
    navbar: {
      title: "RMUIF",
      logo: {
        alt: "Logo",
        src: "img/logo.svg"
      },
      links: [
        {
          to: "docs/getting-started",
          label: "Docs",
          position: "right"
        },
        {
          href: "https://github.com/phoqe/rmuif",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/getting-started"
            },
            {
              label: "Scripts",
              to: "docs/scripts"
            },
            {
              label: "Roadmap",
              to: "docs/roadmap"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/rmuif"
            },
            {
              label: "Spectrum",
              href: "https://spectrum.chat/rmuif"
            },
            {
              label: "Discord",
              href: "https://discord.gg/PdRYuHW"
            }
          ]
        },
        {
          title: "Project",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/phoqe/rmuif"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Linus Långberg`
    },
    googleAnalytics: {
      trackingID: "UA-141052606-2"
    },
    image: "img/logo.png"
  },
  plugins: ["@docusaurus/plugin-google-analytics"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/phoqe/rmuif-docs/edit/develop",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
