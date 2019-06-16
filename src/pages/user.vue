<template>
  <default-layout>
    <user-info-component
        :id="user.id"
        :firstName="user.first_name"
        :lastName="user.last_name"
        :username="user.username"
        :registrationDate="user.created"
        :languageCode="user.language_code"
        :avatarUrl="user.avatar.url"
    />
  </default-layout>
</template>

<script>
  import DefaultLayout from './layouts/default-layout';
  import UserInfoComponent from '../components/user-info/user-info';

  export default {
    name: 'UserPage',
    computed: {
      user() {
        const { id } = this.$route.params;
        return this.$store.state.users.find((user) => user.id === id);
      },
    },
    components: {
      DefaultLayout,
      UserInfoComponent,
    },
  };
</script>
