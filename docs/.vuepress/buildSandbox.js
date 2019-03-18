import { getParameters } from 'codesandbox/lib/api/define';


// TODO: some way to indicate that the icon sprite needs to be loaded?

export default function makeMeASandbox(data) {
  if(!data.name || !data.dependencies || !data.code) return false



// TODO: investigate better templating for scriptTag/index
  const scriptTag = `import { ${data.name} } from "${Object.keys(data.dependencies)[0]}";
${data.loadIconSprite ? 'import { CdrIconSprite } from "@rei/cdr-icon"' : ''}
export default {
  name: "App",
  components: {
    ${data.name}
    ${data.loadIconSprite ? ', CdrIconSprite' : ''}
  }
};`

  const index = `import Vue from "vue";
import App from "./App";

import "@rei/cdr-assets/dist/cdr-core.css";
import "@rei/cdr-assets/dist/cdr-fonts.css";

${data.cssImports || ''}

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
        content: `<template>\n${data.code}</template>\n\n<script>\n${data.scriptOverride || scriptTag}\n</script>`
      },
      'package.json': {
        content: {
          "name": data.name,
          "description": "TODO: put description of each code example here",
          "dependencies": {
            "@rei/cdr-assets": "0.3.0",
            "vue": "2.5.16",
            ...data.dependencies
          }
        },
      },
    },
  };

  console.log(data, parameters);
  return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${getParameters(parameters)}`;
}
