var getParameters = require('codesandbox/lib/api/define').getParameters;

// we would presumably have some ability to customize the "index" file for components that need extra setup
const index = `import Vue from "vue";
import App from "./App";

import "@rei/cdr-assets/dist/cdr-core.css";
import "@rei/cdr-assets/dist/cdr-fonts.css";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});`


// user would need to supply a name/title for the sandbox, any dependencies, and the example .vue code
function makeMeASandbox(name, dependencies, code) {

  const parameters = getParameters({
    files: {
      'index.js': {
        content: index,
      },
      'App.vue': {
        content: code,
      },
      'package.json': {
        content: {
          "name": name,
          "dependencies": {
            "@rei/cdr-assets": "0.3.0",
            "vue": "2.5.16",
            ...dependencies
          }
        },
      },
    },
  });

  return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;
}


// Most of the cedar examples appear to be just <template>'s, so maybe by default this util would include the <script> boilerplate but allow it to be overridden?
const example = `<template>
  <div class="cdr-container">
    <cdr-text tag="h1" modifier="heading-large" class="cdr-stack--xl">
      hey hey hey
    </cdr-text>
  </div>
</template>

<script>
import { CdrText } from "@rei/cdr-text";

export default {
  name: "App",
  components: {
    CdrText
  }
};
</script>
`

console.log(makeMeASandbox('wow, does this work?', {'@rei/cdr-text': '1.0.0'}, example))
// https://codesandbox.io/s/946pvq9r1p example sandbox generated via this method
