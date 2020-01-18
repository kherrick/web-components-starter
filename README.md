web-components-starter
======

## Diving into web components

[![web-components-starter-screenshot](https://raw.githubusercontent.com/kherrick/web-components-starter/master/assets/web-components-starter-screenshot.png)](https://kherrick.github.io/web-components-starter/)

---

## System requirements

  * [Node.js](https://nodejs.org/)
  * [Git](https://git-scm.com/downloads)
  * [bash](https://www.gnu.org/software/bash/)

## Develop using the git repository

### Open a terminal and run the following to build [a view targeting IE11+](https://kherrick.github.io/web-components-starter/) (from IE11, to Edge, Chrome, Firefox, and Safari)

```bash
git clone https://github.com/kherrick/web-components-starter &&\
  cd web-components-starter &&\
  npm i &&\
  npm start
```

### Other Builds

Target browsers after IE11 (a Custom Elements v1 and [shady DOM polyfill](https://www.polymer-project.org/blog/shadydom) only):

  * `npm run start-custom-elements-shady-dom-esm`

Target evergreen browsers supporting [Custom Elements v1](https://developers.google.com/web/fundamentals/web-components/customelements) and shadow DOM (builds a minimal view in a "vanilla js" style):

  * `npm run start-no-polyfills-iife`

## Develop using the npm module

### Create a new IE11 build

```bash
repo=web-components-starter &&\
  build=build-ie11-iife &&\
  mkdir -p hello-web-components &&\
  cd hello-web-components &&\
  npm init -y &&\
  npm i $repo &&\
  cp node_modules/$repo/dist/$build/index.html ./ &&\
  sed -i.bak\
    "s#./iife/main.js#./node_modules/$repo/\dist/$build/iife/main.js#g"\
     index.html &&\
  rm index.html.bak &&\
  npx serve -s .
```
