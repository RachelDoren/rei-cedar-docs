<template>
  <div class="icon-grid">
    <div v-for="iconName in Object.keys(iconData)" class="icon-element">
      <cdr-icon v-html="iconData[iconName]"/>
      <br/>
      {{ componentizeName(iconName) }}
    </div>
  </div>
</template>

<script>
import iconData from '@rei/cedar-icons/dist/icons';

export default {
  name: 'IconsPage',
  components: {
    // TokensCategory,
  },
  data() {
    return {
      iconData
    };
  },
  methods: {
    componentizeName(name) {
      return 'Icon' + name.split('-').map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join('');
    }
  },
  computed: {

  },
}
</script>

<style lang="scss">
@import '../theme/styles/cdr-tokens.scss';
@import '../theme/styles/cdr-doc-tokens.scss';

.icon-grid {

}

.icon-element {
  display: inline-block;
  width: 200px;
  margin-right: $cdr-space-quarter-x;
  margin-bottom: $cdr-space-quarter-x;
  text-align: center;
  border: 1px solid $cdr-color-border-primary;
}
</style>
