import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vue({
            template: { transformAssetUrls },
        }),
        vuetify({ autoImport: true }),
    ],
    ssr: {
        noExternal: ['@inertiajs/server',/\.css$/, /\?vue&type=style/, /^vuetify/],
    },
});
