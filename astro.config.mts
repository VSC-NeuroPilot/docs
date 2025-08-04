// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://vsc-neuropilot.github.io/',
    base: '/docs',
    integrations: [
        starlight({
            favicon: '/heart-pink.svg',
            customCss: [
                './src/styles/icons.css'
            ],
            head: [
                {
                    tag: 'link',
                    attrs: {
                        rel: 'icon',
                        href: '/neuropilot/heart-pink.svg'
                    }
                }
            ],
            title: 'NeuroPilot Docs',
            logo: {
                dark: './src/assets/evilpilot.svg',
                light: './src/assets/neuropilot.svg',
                alt: 'NeuroPilot and EvilPilot icons'
            },
            social: [
                {
                    icon: 'vscode',
                    label: 'NeuroPilot listing on Visual Studio Marketplace',
                    href: 'https://marketplace.visualstudio.com/items?itemName=Pasu4.neuropilot',
                },
                {
                    icon: 'github',
                    label: 'NeuroPilot GitHub',
                    href: 'https://github.com/VSC-NeuroPilot/neuropilot',
                },
            ],
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        {
                            label: 'Setup NeuroPilot',
                            slug: 'guides/setup',
                        },
                        {
                            label: 'Pilot modes',
                            slug: 'guides/pilot',
                        },
                        {
                            label: 'Sandboxing',
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
                        { label: 'Safety', slug: 'reference/safety' },
                        { label: 'Commands', slug: 'reference/commands' },
                        { label: 'Context', slug: 'reference/auto-context' },
                        { label: 'Cookies', slug: 'reference/cookies' },
                        { label: 'Permissions', slug: 'reference/permissions' },
                        { label: 'RCE', slug: 'reference/rce' },
                        { label: 'Settings', slug: 'reference/settings' },
                        { label: 'Dependencies', slug: 'reference/dependencies' },
                    ],
                },
                "assets",
            ],
        }),
    ],
});
