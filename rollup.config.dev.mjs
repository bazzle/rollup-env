import sass from 'rollup-plugin-sass';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/index.js',
    output: {
        file: 'assets/js/main.js',
        format: 'iife',
        sourcemap: true,
        name: 'DevBundle'
    },
    plugins: [
        sass({
            output: 'assets/styles/main.css'
        }),
        terser()
    ]
};