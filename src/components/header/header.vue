<template>
  <header class="header">
    <container-component className="header__inner">
      <router-link class="header__link" to="/">Secretship Contest</router-link>

      <div class="header__user-info" v-if="isUserLoggedIn && user">
        <a class="header__link" href="#" v-on:click="logout">Logout</a>

        <router-link class="header__user-avatar" :to="routerLink">
          <img :src="user.avatar.url" :alt="user.name">
        </router-link>
      </div>

      <a
          class="header__link"
          href="https://t.me/secretshipcontestbot"
          target="_blank"
          v-else
      >
        Login
      </a>
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
      overflow: hidden;

      img {
        display: block;
        max-width: 100%;
      }
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
      isUserRequestFinished() {
        return this.$store.state.isUserRequestFinished;
      },
      user() {
        return this.$store.state.user;
      },
      routerLink() {
        return `/user/${this.user.id}`;
      },
    },
    components: {
      ContainerComponent,
    },
  };
</script>
