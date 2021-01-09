import typescript from 'rollup-plugin-typescript2'
import path from 'path'
import fs from 'fs'
import {
    terser
} from 'rollup-plugin-terser'

const config = (options) => ({
    plugins: [
        typescript({
            tsconfig: 'tsconfig.json',
        }),
    ],
    ...options
})

const _profiles = (inputDir, outputDir, format) => {
    const profiles = []
    const dirPath = path.resolve(__dirname, inputDir)
    const files = fs.readdirSync(dirPath)
    files.forEach((item) => {
        let dir = fs.lstatSync(dirPath + '/' + item)
        if (dir.isDirectory()) {
            const option = {
                input: `${inputDir}/${item}/index.ts`,
                output: {
                    file: `${outputDir}/${item}.min.js`,
                    format: format,
                    plugins: [terser()]
                }
            }

            const devOption = {
                input: `${inputDir}/${item}/index.ts`,
                output: {
                    file: `${outputDir}/${item}.map.js`,
                    format: format,
                }
            }

            profiles.push(config(option))
            profiles.push(config(devOption))
        }
    })
    return profiles
}

const profiles = _profiles('src', 'dist', 'cjs')

export default [
    config({
        input: 'src/index.ts',
        output: [{
            file: 'dist/dass.js',
            format: 'esm'
        }, {
            file: 'dist/dass.cjs.js',
            format: 'cjs'
        }]
    }),
    ...profiles
];