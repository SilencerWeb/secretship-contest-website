<template>
  <default-layout>
  </default-layout>
</template>

<script>
  import DefaultLayout from './layouts/default-layout';
  import { getUrlParameters } from '../utils';
  import { AUTH_TOKEN } from '../constants';

  export default {
    name: 'HomePage',
    mounted() {
      const urlParameters = getUrlParameters();
      const token = localStorage.getItem(AUTH_TOKEN);

      // We need to login user only if we have parameters provided by telegram and he isn't logged in yet
      if (urlParameters && !token) {
        this.$store.dispatch('login', urlParameters);
      }
    },
    components: {
      DefaultLayout,
    },
  };
</script>
