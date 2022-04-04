// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'min',
    url: 'https://minhsiungw.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'mhsiungw', // Usually your GitHub org/user name.
    projectName: 'minhsiungw.github.io', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    trailingSlash: false,
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/mhsiungw/minhsiungw.github.io/edit/main',
                },
                blog: {
                    path: 'portfolio',
                    routeBasePath: 'portfolio',
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/mhsiungw/minhsiungw.github.io/edit/main',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Min',
                items: [
                    {
                        type: 'doc',
                        docId: 'Javascript/Javascript',
                        position: 'left',
                        label: 'Docs',
                    },
                    { to: '/portfolio', label: 'Portfolio', position: 'left' },
                    {
                        href: 'https://github.com/facebook/docusaurus',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                copyright: `
                            &copy; min ${new Date().getFullYear()} 
                            &nbsp
                            Powered by <a href="https://docusaurus.io/">Docusaurus</a>.
                            `,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
}

module.exports = config
