web-components-starter
======

A Web Components starter project

[![web-components-starter-screenshot](https://raw.githubusercontent.com/kherrick/web-components-starter/master/assets/web-components-starter-screenshot.png)](https://kherrick.github.io/web-components-starter/)

---

## Get started developing with the web-components-starter npm module:

```bash
mkdir -p hello-web-components \
 && npm init -y \
 && npm i web-components-starter \
 && cp node_modules/web-components-starter/dist/build-ie11/index.html ./ \
 && export C=container I=index N=nomodule WCS=web-components-starter \
 && sed "s#./$N/$WCS-$C.js#./node_modules/$WCS/dist/build-ie11/$N/$WCS-$C.js#g" ./$I.html > $I.html.new \
 && mv index.html.new index.html && npx serve -s .
```

## Get started developing with the web-components-starter git repository:

### System requirements:

  * [Node.js](https://nodejs.org/)

### Open a terminal, clone [this repository](https://github.com/kherrick/web-components-starter/), and run the following in the root of the project:

  * `npm run start` - by default builds [a view targeting IE11+](https://kherrick.github.io/web-components-starter/) (from IE11, to Edge, Chrome, Firefox, and Safari)

  * `npm run start-custom-elements-shady-dom` - targeting browsers after IE11 (a Custom Elements v1 and [shady DOM polyfill](https://www.polymer-project.org/blog/shadydom) only)

  * `npm run start-no-polyfills` - targets evergreen browsers supporting [Custom Elements v1](https://developers.google.com/web/fundamentals/web-components/customelements) and shadow DOM (builds a minimal view in a "vanilla js" style)
