import resolve from "rollup-plugin-node-resolve"
import typescript from "rollup-plugin-typescript2"
import { uglify } from "rollup-plugin-uglify"
import { version } from "./package.json"

const year = new Date().getFullYear()
const banner = `/*\nStimulus ${version}\nCopyright © ${year} Basecamp, LLC\n */`

console.log("__dirname =", __dirname)

const uglifyOptions = {
  mangle: false,
  compress: false,
  output: {
    beautify: true,
    indent_level: 2,
    comments: /Copyright/
  }
}

export default {
  input: `${__dirname}/src/core/index.ts`,
  output: {
    file: `${__dirname}/dist/stimulus.umd.js`,
    format: "umd",
    name: "Stimulus",
    banner
  },
  plugins: [
    resolve(),
    typescript({ tsconfig: `${__dirname}/tsconfig.json` }),
    uglify(uglifyOptions)
  ]
}
