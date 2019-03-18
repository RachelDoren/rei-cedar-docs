import { getParameters } from 'codesandbox/lib/api/define';

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




// user would need to supply a name for the sandbox, any dependencies, and the example .vue code
export default function makeMeASandbox(data) {
  if(!data.name || !data.dependencies || !data.code) return false

  console.log(data)
  // This (sh/w)ould work for instances like cdr-grid if used as follows:
  // name="CdrRow, CdrCol" dependencies= {"@rei/cdr-grid": "1.0.0"}
    const scriptTag = `<script>
  import { ${data.name} } from "${Object.keys(data.dependencies)[0]}";

  export default {
    name: "App",
    components: {
      ${data.name}
    }
  };
  </script>
  `


  const parameters = getParameters({
    files: {
      'index.js': {
        content: data.indexOverride || index,
      },
      'App.vue': {
        content: '<template>\n' + data.code + '\n</template>\n' + (data.scriptOverride || scriptTag),
      },
      'package.json': {
        content: {
          "name": data.title || data.name,
          "dependencies": {
            "@rei/cdr-assets": "0.3.0",
            "vue": "2.5.16",
            ...data.dependencies
          }
        },
      },
    },
  });

  return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;
}
