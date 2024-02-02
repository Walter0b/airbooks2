import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    resolve: {
        alias: {
            '@': new URL('./src', import.meta.url).pathname,
            '@utils': new URL('./src/utils', import.meta.url).pathname,
            '@pages': new URL('./src/pages', import.meta.url).pathname,
            '@assets': new URL('./src/assets', import.meta.url).pathname,
            '@static': new URL('./src/static', import.meta.url).pathname,
            '@components': new URL('./src/components', import.meta.url)
                .pathname,
        },
    },
    plugins: [react()],
})
