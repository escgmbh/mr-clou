import { defineConfig } from 'vite'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import { fileURLToPath } from 'url'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import { resolve, dirname } from 'node:path'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Pages(),
        eslintPlugin(),
        vueI18n({
            include: resolve(
                dirname(fileURLToPath(import.meta.url)),
                './src/assets/locale/**'
            ),
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
