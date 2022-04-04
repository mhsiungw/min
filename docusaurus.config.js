// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'min',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'minhsiungw', // Usually your GitHub org/user name.
    projectName: 'docusaurus-blog', // Usually your repo name.

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    path: 'portfolio',
                    routeBasePath: 'portfolio',
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
