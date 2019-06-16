<template>
  <header class="header">
    <container-component className="header__inner">
      <router-link class="header__link" to="/">Secretship Contest</router-link>

      <div class="header__user-info" v-if="isUserLoggedIn">
        <a class="header__link" href="#" v-on:click="logout">Logout</a>
        <img class="header__user-avatar" :src="user.avatar.url" :alt="user.name">
      </div>
    </container-component>
  </header>
</template>

<style lang="scss" scoped>
  .header {

    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 58px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      padding-right: 10px;
      padding-left: 10px;
    }

    &__link {
      font-size: 15px;
      font-weight: 600;
      text-decoration: none;
      color: var(--accent-color);

      &:hover {
        text-decoration: underline;
      }
    }

    &__user-info {
      display: flex;
      align-items: center;

      .header__link {
        margin-right: 15px;
      }
    }

    &__user-avatar {
      width: 32px;
      height: 32px;
      border-radius: 50px;
    }
  }
</style>

<script>
  import ContainerComponent from '../container/container';

  export default {
    name: 'HeaderComponent',
    methods: {
      logout(event) {
        event.preventDefault();
        this.$store.dispatch('logout');
      },
    },
    computed: {
      isUserLoggedIn() {
        return this.$store.state.isUserLoggedIn;
      },
      user() {
        return this.$store.state.user;
      },
    },
    components: {
      ContainerComponent,
    },
  };
</script>
