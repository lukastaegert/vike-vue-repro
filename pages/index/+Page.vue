<template>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
  </ul>
</template>

<script lang="ts" setup>
import Counter from './Counter.vue'
</script>

<style lang="scss">
@import '../_styles.scss';

h1 {
  @include foo();
}
</style>
```
