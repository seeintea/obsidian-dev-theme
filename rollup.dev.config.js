import typescript from 'rollup-plugin-typescript2'

const config = (options) => ({
    plugins: [
        typescript({
            tsconfig: 'tsconfig.json',
        }),
    ],
    ...options
})


export default [
    config({
        input: 'src/index.ts',
        output: {
            file: 'dist/dass.js',
            format: 'esm'
        }
    }),
];