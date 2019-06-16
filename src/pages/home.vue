<template>
  <default-layout>
    <user-cards-list-component :users="users"/>
  </default-layout>
</template>

<script>
  import DefaultLayout from './layouts/default-layout';
  import UserCardsListComponent from '../components/shared/user-cards-list/user-cards-list';

  export default {
    name: 'HomePage',
    computed: {
      users() {
        const isUserLoggedIn = this.$store.state.isUserLoggedIn;
        return isUserLoggedIn ? this.$store.getters.usersWithoutAuthorizedUser : this.$store.state.users;
      },
    },
    components: {
      DefaultLayout,
      UserCardsListComponent,
    },
  };
</script>
