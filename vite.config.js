import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [react()],
    server: {
        open: true,
        port: 3000,
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {},
            },
            input: {
                app: './index.html', // default
            },
        },
    },
});
