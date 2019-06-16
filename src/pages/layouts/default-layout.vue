<template>
  <div>
    <header-component/>
    <slot/>
    <loader-component v-if="isLoaderVisible"/>
  </div>
</template>

<script>
  import HeaderComponent from '../../components/header/header';
  import LoaderComponent from '../../components/loader/loader';

  export default {
    name: 'DefaultLayout',
    computed: {
      isUserLoggedIn() {
        return this.$store.state.isUserLoggedIn;
      },
      isUserRequestFinished() {
        return this.$store.state.isUserRequestFinished;
      },
      isAuthorizationCheckFinished() {
        return this.$store.state.isAuthorizationCheckFinished;
      },
      isUsersRequestFinished() {
        return this.$store.state.isUsersRequestFinished;
      },
      isLoaderVisible() {
        // If user is logged in, we should wait until both user and users will be loaded
        if (this.isUserLoggedIn) {
          return !this.isAuthorizationCheckFinished || !this.isUserRequestFinished || !this.isUsersRequestFinished;
        } else { // But if user is not logged in, then we should wait only until users will be loaded
          return !this.isAuthorizationCheckFinished || !this.isUsersRequestFinished;
        }
      },
    },
    components: {
      HeaderComponent,
      LoaderComponent,
    },
  };
</script>
