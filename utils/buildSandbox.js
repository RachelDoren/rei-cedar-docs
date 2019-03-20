import { getParameters } from 'codesandbox/lib/api/define';

// name: String, the name of the component(s). This must match what the package exports  (i.e, CdrComponent not cdr-component). for packages that export multiple components, separate the names with a comma (i.e, "CdrMainComponent, CdrSubComponent")
// dependencies: Object, should be an object with a single key value pair like `{ "@rei/cdr-component": "1.0.0"}`. If your component has peerDeps, they should be added here. If using the loadImg or loadIcon options, those deps and css improts will automatically be added
// loadComponentCss: Boolean, whether or not the package has a CSS file that needs to be loaded. Will be inferred based on the dependency name
// loadIcon: Boolean, if your component or examples needs to use cdr-icon or cdr-icon-sprite, set this value to `true`
// LoadImg: Boolean, if your component or examples needs to use cdr-img, set this value to `true`

export default function makeMeASandbox(data, model) {
  if(!data.name || !data.dependencies || !data.code) return false

  const mainDependency = Object.keys(data.dependencies)[0]
  const componentPath = mainDependency.split("/")[1];
  const componentCss = `import "@rei/${componentPath}/dist/${componentPath}.css"`;

  // TODO: maybe a cleaner way to do this?
  let dependencies = data.dependencies
  if (data.loadImg) dependencies["@rei/cdr-img"] = "^1.0.0"
  if (data.loadIcon) dependencies["@rei/cdr-icon"] = "^2.0.0"

// TODO: investigate better templating for scriptTag/index
  const scriptTag = `import { ${data.name} } from "${mainDependency}";
${data.loadIcon ? 'import { CdrIcon, CdrIconSprite } from "@rei/cdr-icon"' : ''}
${data.loadImg ? 'import { CdrImg } from "@rei/cdr-img"' : ''}

export default {
  name: "App",
  components: {
    ${data.name}
    ${data.loadIcon ? ', CdrIconSprite, CdrIcon' : ''}
    ${data.loadImg ? ', CdrImg' : ''}
  },
  data() {
    return ${JSON.stringify(model)}
  }
};`




// TODO: switch cssImports to "loacComponentCss" maybe?
  const index = `import Vue from "vue";
import App from "./App";

import "@rei/cdr-assets/dist/cdr-core.css";
import "@rei/cdr-assets/dist/cdr-fonts.css";

${data.cssImports || ''}
${data.loadComponentCss ? componentCss : ''}
${data.loadIcon ? 'import "@rei/cdr-icon/dist/cdr-icon.css";' : ''}
${data.loadImg ? 'import "@rei/cdr-img/dist/cdr-img.css";' : ''}

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});`


  const parameters = {
    files: {
      'index.js': {
        content: data.indexOverride || index,
      },
      'App.vue': {
        // TODO: maybe make the container div centered or something?
        // TODO: how to handle adding stuff to style tag? will need to pass it twice?
        // TODO: how to handle data that is currently pulled from the front-matter? will need to pass it twice?
        content: `<template>\n<div>\n\n${data.code}\n</div>\n</template>\n\n<script>\n${data.scriptOverride || scriptTag}\n</script>`
      },
      'package.json': {
        content: {
          "name": data.name,
          "description": "TODO: put description of each code example here",
          "dependencies": {
            "@rei/cdr-assets": "^0.3.0",
            "vue": "2.5.16",
            ...dependencies
          }
        },
      },
    },
  };

  console.log(data, parameters);
  return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${getParameters(parameters)}`;
}
