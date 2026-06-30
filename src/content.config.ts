import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { autoSidebarLoader } from 'starlight-auto-sidebar/loader';
import { autoSidebarSchema } from 'starlight-auto-sidebar/schema';
import { changelogsLoader } from 'starlight-changelogs/loader';

export const collections = {
    docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
    autoSidebar: defineCollection({ loader: autoSidebarLoader(), schema: autoSidebarSchema() }),
    changelogs: defineCollection({
        loader: changelogsLoader([
            {
                title: 'API Changelog',
                provider: 'keep-a-changelog',
                base: 'api/changelog',
                changelog: './extension/packages/types/CHANGELOG.md',
                process(args) {
                    if (args.title.startsWith('(Draft)') || args.title.startsWith('(Unreleased)')) return
                    else return `v${args.title}`
                }
            },
        ])
    })
};
