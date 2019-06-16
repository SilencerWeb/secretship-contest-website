<template>
  <header class="header">
    <container-component className="header__inner">
      <ul class="header__breadcrumbs">
        <li class="header__breadcrumbs-item">
          <router-link class="header__link" to="/">Secretship Contest</router-link>
        </li>

        <li class="header__breadcrumbs-item header__breadcrumbs-item_user-name" v-if="currentUser">
          {{ currentUserFullName }}
        </li>
      </ul>

      <div class="header__user-info" v-if="isUserLoggedIn && user">
        <a class="header__link" href="#" v-on:click="logout">{{ $t('headerLogoutButtonText') }}</a>

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
        {{ $t('headerLoginButtonText') }}
      </a>
    </container-component>
  </header>
</template>

<style lang="scss" scoped>
  @import "../../assets/styles/variables";
  @import "../../assets/styles/mixins";

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

    &__breadcrumbs {
      display: flex;
      list-style-type: none;
      padding-left: 0;
      margin-top: 0;
      margin-bottom: 0;
    }

    &__breadcrumbs-item {
      position: relative;
      font-size: 15px;
      font-weight: 700;
      margin-right: 20px;

      &:before {
        content: '/';
        position: absolute;
        top: 50%;
        left: -12.5px;
        color: rgba(0, 0, 0, 0.2);
        transform: translateY(-50%);
      }

      &:first-child {

        &:before {
          display: none;
        }
      }

      &:last-child {
        margin-right: 0;
      }

      &_user-name {

        @include xs-down {
          display: none;

          &:before {
            display: none;
          }
        }
      }
    }

    &__link {
      font-size: 15px;
      font-weight: 700;
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
  import { getFullName } from '../../utils';

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
      currentUser() {
        const { id } = this.$route.params;
        return this.$store.state.users.find((user) => user.id === id);
      },
      currentUserFullName() {
        return getFullName(this.currentUser.first_name, this.currentUser.last_name);
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
