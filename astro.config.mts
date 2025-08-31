// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightHeadingBadgesPlugin from 'starlight-heading-badges';
import starlightSidebarTopicsPlugin from 'starlight-sidebar-topics';

import { BASE_GITHUB_ORG, MARKETPLACE_URL } from './consts/links'; // typescript aliasing doesn't work here for some reason (it does in the mdx pages tho)

/** @todo https://starlight.astro.build/resources/plugins/#plugins */

// https://astro.build/config
export default defineConfig({
    site: 'https://vsc-neuropilot.github.io',
    base: '/docs',
    integrations: [
        starlight({
            plugins: [starlightHeadingBadgesPlugin(), starlightSidebarTopicsPlugin([ // todo: Should API & web be in a separate section?
                {
                    label: 'Base Extension',
                    link: '/client/',
                    icon: 'laptop',
                    items: [
                        {
                            label: 'Guides',
                            autogenerate: {
                                directory: 'client/guides',
                                collapsed: true
                            }
                        },
                        {
                            label: 'Reference',
                            autogenerate: {
                                directory: 'client/reference',
                                collapsed: true
                            }
                        },
                        {
                            label: "MCP",
                            autogenerate: {
                                directory: "client/mcp",
                                collapsed: true
                            }
                        }
                    ]
                },
                {
                    label: 'Server Extension',
                    link:  '/server/',
                    badge: { text: 'Coming later!', variant: 'danger' },
                    icon: 'vscode',
                    items: [
                        {
                            label: 'Guides',
                            autogenerate: {
                                directory: 'server/guides',
                                collapsed: true
                            }
                        },
                        {
                            label: 'Reference',
                            autogenerate: {
                                directory: 'server/reference',
                                collapsed: true
                            }
                        }
                    ]
                },
                {
                    label: 'Container Presets',
                    link: '/images/',
                    icon: 'seti:docker',
                    items: [
                        {
                            label: 'Python',
                            autogenerate: {
                                directory: 'images/python',
                                collapsed: true
                            }
                        },
                        {
                            label: 'JavaScript',
                            autogenerate: {
                                directory: 'images/javascript',
                                collapsed: true
                            }
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
                            autogenerate: {
                                directory: 'meta/contributors',
                                collapsed: true
                            }
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
                './src/styles/starlight.css'
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
