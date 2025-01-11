// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import react from '@astrojs/react';

// Sitemap + robots.txt plugins for SEO-friendliness
// astro-icon for (get this) icons

export default defineConfig({
    site: 'https://dev.cougarcs.com/',
    integrations: [sitemap(), icon(), react()]
});