// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

// Sitemap + robots.txt plugins for SEO-friendliness
// astro-icon for (get this) icons

export default defineConfig({
    site: 'https://dev.cougarcs.com/',
    output: 'server',
    integrations: [sitemap(), icon(), react()],
    adapter: cloudflare(),
    vite: {
        define: {
            "process.env": process.env
        }
    }
});