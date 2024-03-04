import vue from '@vitejs/plugin-vue'
import vike from 'vike/plugin'
import {UserConfig} from 'vite'
import legacy from "@vitejs/plugin-legacy";


const config: UserConfig = {
    root: __dirname,
    plugins: [
        legacy({
            modernPolyfills: true,
            targets: ["defaults", "not IE 11"],
        }),
        vue(),
        vike({prerender: true})
    ],
    base: `/spa/`,
    build: {
        assetsDir: 'spa/assets',
        manifest: true,
        outDir: 'dist',
        minify: 'terser',
        terserOptions: { safari10: true },
        rollupOptions: {
            output: {
                chunkFileNames: 'spa/assets/chunk-[hash].js',
            },
        },
    },
}

export default config
