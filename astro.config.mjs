// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://sheetyapp.com',
    integrations: [
        starlight({
            title: 'Sheety Documentation',
            description: 'Official documentation for Sheety - Turn your Google Sheets into a RESTful API',
            logo: {
                src: './public/logo-64.png',
            },
            customCss: [
                // Relative path to your custom CSS file
            ],
            social: [
                {
                    icon: 'github',
                    label: 'GitHub',
                    href: 'https://github.com/sheetyapp',
                },
            ],
            sidebar: [
                {
                    label: 'Getting Started',
                    items: [
                        { label: 'Introduction', slug: 'docs' },
                        { label: 'Quick Start', slug: 'docs/quick-start' },
                    ],
                },
                {
                    label: 'API Reference',
                    items: [
                        { label: 'Authentication', slug: 'docs/api/authentication' },
                        { label: 'Endpoints', slug: 'docs/api/endpoints' },
                    ],
                },
                {
                    label: 'Guides',
                    items: [
                        { label: 'Using with JavaScript', slug: 'docs/guides/javascript' },
                        { label: 'Best Practices', slug: 'docs/guides/best-practices' },
                    ],
                },
            ],
        }),
        sitemap({
            filter: (page) => !page.includes('/404'),
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date(),
        })
    ],
});
