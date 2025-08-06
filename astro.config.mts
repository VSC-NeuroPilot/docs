// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightHeadingBadgesPlugin from 'starlight-heading-badges';
import { BASE_GITHUB_URL, MARKETPLACE_URL } from './consts/links';

/** @todo https://starlight.astro.build/resources/plugins/#plugins */

// https://astro.build/config
export default defineConfig({
    site: 'https://vsc-neuropilot.github.io',
    base: '/docs',
    integrations: [
        starlight({
            plugins: [starlightHeadingBadgesPlugin()],
            favicon: '/heart-pink.svg',
            customCss: [
                './src/styles/icons.css',
                './src/styles/starlight.css'
            ],
            head: [
                /*{
                    tag: 'link',
                    attrs: {
                        rel: 'icon',
                        href: '/docs/heart-pink.svg'
                    }
                }*/
            ],
            title: 'NeuroPilot Docs',
            editLink: {
                baseUrl: BASE_GITHUB_URL + '/edit/master/docs'
            },
            lastUpdated: true,
            logo: {
                dark: './src/assets/evilpilot.svg',
                light: './src/assets/neuropilot.svg',
                alt: 'NeuroPilot and EvilPilot icons'
            },
            social: [
                {
                    icon: 'vscode',
                    label: 'NeuroPilot listing on Visual Studio Marketplace',
                    href: MARKETPLACE_URL("page"),
                },
                {
                    icon: 'github',
                    label: 'NeuroPilot GitHub',
                    href: BASE_GITHUB_URL,
                },
            ],
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        {
                            label: 'Setup NeuroPilot',
                            badge: { text: 'Start here!', variant: 'tip' },
                            slug: 'guides/setup',
                        },
                        {
                            label: 'Pilot modes',
                            slug: 'guides/pilot',
                        },
                        {
                            label: 'Sandboxing',
                            badge: { text: 'WIP', variant: 'caution' },
                            slug: 'guides/sandboxing'
                        }
                    ],
                },
                {
                    label: 'Reference',
                    items: [
                        {
                            label: 'Features',
                            autogenerate: {
                                directory: 'reference/features',
                                collapsed: true
                            }
                        },
                        { label: 'Safety', slug: 'reference/safety', badge: { text: 'Important', variant: 'danger' } },
                        { label: 'Commands', slug: 'reference/commands' },
                        { label: 'Context', slug: 'reference/auto-context', badge: { text: 'Stub', variant: 'caution' } },
                        { label: 'Cookies', slug: 'reference/cookies', badge: { text: 'Stub', variant: 'caution' } },
                        { label: 'Cursor', slug: 'reference/cursor', badge: { text: 'Conditional', variant: 'success' } },
                        { label: 'Permissions', slug: 'reference/permissions', badge: { text: 'Important', variant: 'danger' } },
                        { label: 'RCE', slug: 'reference/rce', badge: { text: 'Core', variant: 'note' } },
                        { label: 'Settings', slug: 'reference/settings' },
                        { label: 'Dependencies', slug: 'reference/dependencies' },
                    ],
                },
                {
                    label: 'NeuroPilot Assets',
                    badge: { text: 'Meta', variant: 'note' },
                    slug: 'assets'
                },
                {
                    label: 'Contributors',
                    badge: { text: 'Meta', variant: 'note' },
                    autogenerate: {
                        directory: 'contributors',
                        collapsed: true
                    }
                }
            ],
            components: {
                Footer: './src/components/Footer.astro'
            }
        }),
    ],
});
