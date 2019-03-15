<template>
  <div class="cdr-container">
    <cdr-text
        tag="h1"
        modifier="heading-large"
        class="cdr-stack--xl">
        hey hey hey
    </cdr-text>
  </div>
</template>

<script>
import * as CdrComps from "./cedar.js";

export default {
  name: "App",
  components: {
    ...CdrComps,
  }
};
</script>
