import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@homework-task': `${path.resolve(__dirname, './src/')}`,
            '@common': `${path.resolve(__dirname, './src/common/')}`,
            '@services': `${path.resolve(__dirname, './src/services/')}`,
        },
    },
});
