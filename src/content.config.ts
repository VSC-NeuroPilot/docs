import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { file } from 'astro/loaders';
/*import { autoSidebarLoader } from 'starlight-auto-sidebar/loader';
import { autoSidebarSchema } from 'starlight-auto-sidebar/schema';*/

export const collections = {
    docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
    //autoSidebar: defineCollection({ loader: autoSidebarLoader(), schema: autoSidebarSchema() }),
    companions: defineCollection({
        loader: file('src/data/companions.json'),
        schema: z.object({
            name: z.string(),
            icon: z.string(),
            type: z.string(),
            namespace: z.string(),
            links: z.object({
                code: z.string(),
                site: z.string(),
                vsm: z.string(),
                ovsx: z.string(),
            }),
        }),
    })
};
