<template>
  <div class="container" :class="className">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    max-width: 800px;
    margin-right: auto;
    margin-left: auto;
  }
</style>

<script>
  export default {
    name: 'ContainerComponent',
    props: {
      className: String,
    },
  };
</script>
