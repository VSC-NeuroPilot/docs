// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightHeadingBadgesPlugin from 'starlight-heading-badges';
import starlightSidebarTopicsPlugin from 'starlight-sidebar-topics';
//import starlightAutoSidebar from 'starlight-auto-sidebar';
import starlightTypeDocPlugin, { typeDocSidebarGroup } from 'starlight-typedoc';

import { BASE_GITHUB_ORG, MARKETPLACE_URL } from './consts/links'; // typescript aliasing doesn't work here for some reason (it does in the mdx pages tho)

/** @todo https://starlight.astro.build/resources/plugins/#plugins */

// https://astro.build/config
export default defineConfig({
    site: 'https://vsc-neuropilot.github.io',
    base: '/docs',
    integrations: [
        starlight({
            plugins: [
                starlightHeadingBadgesPlugin(),
                /*starlightAutoSidebar(),*/
                starlightTypeDocPlugin({
                    entryPoints: ['./node_modules/@vsc-neuropilot/api-types/dist/index.d.mts'],
                    tsconfig: './tsconfig.lib.json',
                    output: 'api/reference'
                }),
                starlightSidebarTopicsPlugin([ // todo: Should API & web be in a separate section?
                    {
                        label: 'Base Extension',
                        link: '/client/',
                        icon: 'laptop',
                        items: [
                            {
                                label: 'Guides',
                                items: [{
                                    autogenerate: {
                                        directory: 'client/guides',
                                        collapsed: true
                                    }
                                }]
                            },
                            {
                                label: 'Reference',
                                items: [{
                                    autogenerate: {
                                        directory: 'client/reference',
                                        collapsed: true
                                    }
                                }]
                            },
                            {
                                label: "MCP",
                                items: [{
                                    autogenerate: {
                                        directory: "client/mcp",
                                        collapsed: true
                                    }
                                }]
                            }
                        ]
                    },
                    {
                        label: 'Server Extension',
                        link: '/server/',
                        badge: { text: 'Coming later!', variant: 'danger' },
                        icon: 'vscode',
                        items: [
                            {
                                label: 'Guides',
                                items: [{
                                    autogenerate: {
                                        directory: 'server/guides',
                                        collapsed: true
                                    }
                                }]
                            },
                            {
                                label: 'Reference',
                                items: [{
                                    autogenerate: {
                                        directory: 'server/reference',
                                        collapsed: true
                                    }
                                }]
                            }
                        ]
                    },
                    {
                        label: 'Companion API',
                        link: '/api/',
                        badge: { text: 'API Developers', variant: 'caution' },
                        icon: 'puzzle',
                        items: [
                            // TODO: integrate types packages JSDoc using https://starlight-typedoc.vercel.app/
                            'api',
                            {
                                label: 'Guides',
                                items: [{
                                    autogenerate: {
                                        directory: 'api/guides',
                                    },
                                }],
                            },
                            {
                                label: 'Reference',
                                items: [typeDocSidebarGroup]
                            },
                        ]
                    },
                    {
                        label: 'Container Presets',
                        link: '/images/',
                        icon: 'seti:docker',
                        items: [
                            {
                                label: 'Python',
                                items: [{
                                    autogenerate: {
                                        directory: 'images/python',
                                        collapsed: true
                                    }
                                }]
                            },
                            {
                                label: 'JavaScript',
                                items: [{
                                    autogenerate: {
                                        directory: 'images/javascript',
                                        collapsed: true
                                    }
                                }]
                            }
                        ]
                    },
                    {
                        label: 'Meta',
                        link: '/meta/',
                        badge: { text: 'Contributors' },
                        icon: 'list-format',
                        items: [
                            'meta/assets',
                            {
                                label: 'Contributors',
                                items: [{
                                    autogenerate: {
                                        directory: 'meta/contributors',
                                        collapsed: true
                                    }
                                }]
                            }
                        ],
                    },
                    {
                        label: 'Unit tests',
                        icon: 'approve-check-circle',
                        badge: { text: 'External', variant: 'note' },
                        link: 'https://vsc-neuropilot.github.io/unit-tests'
                    }
                ],
                )],
            favicon: '/heart-pink.svg',
            customCss: [
                './src/styles/icons.css',
                './src/styles/starlight.css',
                './src/styles/links.css',
            ],
            head: [
                {
                    tag: 'link',
                    attrs: {
                        rel: 'icon',
                        href: '/docs/heart-pink.svg'
                    }
                }
            ],
            title: 'NeuroPilot Docs',
            editLink: {
                baseUrl: BASE_GITHUB_ORG + '/docs/edit/master/'
            },
            lastUpdated: true,
            pagination: false,
            logo: {
                src: './src/assets/heart-xaendril.png',
                alt: 'v2 NeuroPilot logo'
            },
            social: [
                {
                    icon: 'vscode',
                    label: 'NeuroPilot listing on Visual Studio Marketplace',
                    href: MARKETPLACE_URL("page"),
                },
                {
                    icon: 'github',
                    label: 'VSC-NeuroPilot organization',
                    href: BASE_GITHUB_ORG
                },
                {
                    icon: 'discord',
                    label: 'Discord discussion thread',
                    href: 'https://discord.com/channels/574720535888396288/1350968830230396938'
                },
            ],
            components: {
                Footer: './src/components/Footer.astro'
            }
        }),
    ],
});
