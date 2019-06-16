<template>
  <div>
    <header-component/>
    <slot/>
  </div>
</template>

<script>
  import HeaderComponent from '../../components/shared/header/header';

  export default {
    name: 'DefaultLayout',
    components: {
      HeaderComponent,
    },
  };
</script>
