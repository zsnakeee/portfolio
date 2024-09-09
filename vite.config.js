import {defineConfig} from 'vite';
import path from 'path';
import {viteStaticCopy} from 'vite-plugin-static-copy'

export default defineConfig({
    root: 'src', // Set the root directory to 'src' where index.html is located
    build: {
        outDir: '../dist', // Specify the output directory for build (relative to root)
        emptyOutDir: true, // Clean the dist folder before building
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // Optional: Aliases '@' to the 'src' folder for cleaner imports
        },
    },
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'assets/img/*', // Ensure the path resolves correctly
                    dest: 'assets/img' // Destination folder inside dist
                }
            ]
        }),
    ],
});
