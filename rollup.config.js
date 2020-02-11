import pkg from './package.json'

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'lib/index.js',
            format: 'umd',
            name: pkg.name
        }
    ]
}