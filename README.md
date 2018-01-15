# ES6+Webpack boilerplate for Google Apps Script

GAS is powerful, but its tooling is less than ideal. This repo serves as an example of the bare minimum setup required to develop GAS locally with ES6 and Webpack.

## Usage

1. Clone this repo
2. Run `yarn install`
3. Add your GAS code to `src/index.js`
4. Run `yarn run build`
5. Paste the contents of `dist/Code.gs` into the GAS editor's `Code.gs` file
