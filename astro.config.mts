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
                    label: 'UI',
                    link: '/client/',
                    icon: 'laptop',
                    items: [
                        {
                            label: 'Guides',
                            items: [
                                {
                                    label: 'Setup NeuroPilot',
                                    badge: { text: 'Start here!', variant: 'tip' },
                                    slug: 'client/guides/setup',
                                },
                                {
                                    label: 'Pilot modes',
                                    slug: 'client/guides/pilot',
                                },
                                {
                                    label: 'Sandboxing',
                                    badge: { text: 'WIP', variant: 'caution' },
                                    slug: 'client/guides/sandboxing'
                                }
                            ],
                        },
                        {
                            label: 'Reference',
                            items: [
                                {
                                    label: 'Features',
                                    autogenerate: {
                                        directory: 'client/reference/features',
                                        collapsed: true
                                    }
                                },
                                { label: 'Safety', slug: 'client/reference/safety', badge: { text: 'Important', variant: 'danger' } },
                                { label: 'Commands', slug: 'client/reference/commands' },
                                { label: 'Context', slug: 'client/reference/auto-context', badge: { text: 'Stub', variant: 'caution' } },
                                { label: 'Cookies', slug: 'client/reference/cookies', badge: { text: 'Stub', variant: 'caution' } },
                                { label: 'Cursor', slug: 'client/reference/cursor', badge: { text: 'Conditional', variant: 'success' } },
                                { label: 'Permissions', slug: 'client/reference/permissions', badge: { text: 'Important', variant: 'danger' } },
                                { label: 'RCE', slug: 'client/reference/rce', badge: { text: 'Core', variant: 'note' } },
                                { label: 'Settings', slug: 'client/reference/settings' },
                                { label: 'Dependencies', slug: 'client/reference/dependencies' },
                            ],
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
                    label: 'Workspace',
                    link:  '/server/',
                    badge: { text: 'Coming later!', variant: 'danger' },
                    icon: 'vscode',
                    items: [
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
                    label: 'Container presets',
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
            logo: {
                src: './public/heart-xaendril.png',
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
                }
            ],
            components: {
                Footer: './src/components/Footer.astro'
            }
        }),
    ],
});
