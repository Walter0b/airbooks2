import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    resolve: {
        alias: {
            '@': new URL('./src/', import.meta.url).pathname,
        },
    },
    plugins: [react()],
})
