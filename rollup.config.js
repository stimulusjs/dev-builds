import resolve from "rollup-plugin-node-resolve"
import { version } from "../../lerna.json"

const year = new Date().getFullYear()
const banner = `/*\nStimulus ${version}\nCopyright © ${year} Basecamp, LLC\n */`

export default {
  input: "index.js",
  output: {
    file: "dist/stimulus.umd.js",
    format: "umd",
    name: "Stimulus",
    banner
  },
  plugins: [
    resolve()
  ]
}
