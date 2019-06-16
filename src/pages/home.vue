<template>
  <default-layout>
    <user-cards-list :users="users"/>
  </default-layout>
</template>

<script>
  import DefaultLayout from './layouts/default-layout';
  import UserCardsList from '../components/shared/user-cards-list/user-cards-list';
  import { getUrlParameters } from '../utils';
  import { AUTH_TOKEN } from '../constants';

  export default {
    name: 'HomePage',
    computed: {
      users() {
        const isUserLoggedIn = this.$store.state.isUserLoggedIn;
        return isUserLoggedIn ? this.$store.getters.usersWithoutAuthorizedUser : this.$store.state.users;
      },
    },
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
      UserCardsList,
    },
  };
</script>
