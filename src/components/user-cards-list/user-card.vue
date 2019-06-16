<template>
  <div class="user-card" :class="className">
    <router-link class="user-card__inner" :to="routerLink">
      <img class="user-card__avatar" :src="avatar.url" :alt="fullName" v-if="avatar.url">
      <div
          class="user-card__avatar user-card__avatar_placeholder"
          :style="avatarPlaceholderBackgroundColorStyle"
          v-else-if="avatar.placeholder"
      >
        {{ avatarPlaceholderText }}
      </div>

      <div class="user-card__info">
        <h3 class="user-card__name">{{ fullName }}</h3>
        <span class="user-card__registration-date">{{ formattedRegistrationDate }}</span>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  .user-card {
    overflow: hidden;

    &:hover,
    &:active {
      background-color: rgba(0, 0, 0, 0.05);
    }

    &__inner {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding-top: 10px;
      padding-right: 10px;
      padding-bottom: 10px;
      padding-left: 10px;
    }

    &__avatar {
      flex-shrink: 0;
      width: 50px;
      height: 50px;
      border-radius: 50px;
      margin-right: 10px;

      &_placeholder {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        font-weight: 700;
        color: #ffffff;
        background-color: var(--accent-color);
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
    }

    &__name {
      font-size: 14px;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: var(--primary-color);
      margin-top: 0;
      margin-bottom: 0;
      overflow: hidden;
    }

    &__registration-date {
      font-size: 13px;
      color: var(--secondary-color);
    }
  }
</style>

<script>
  import {
    getFullName,
    getFormattedRegistrationDate,
  } from '../../utils';

  export default {
    name: 'UserCardComponent',
    props: {
      className: String,
      id: String,
      firstName: String,
      lastName: String,
      registrationDate: String,
      avatar: Object,
    },
    computed: {
      routerLink() {
        return `/user/${this.id}`;
      },
      fullName() {
        return getFullName(this.firstName, this.lastName);
      },
      avatarPlaceholderBackgroundColorStyle() {
        return this.avatar.placeholder.backgroundColorStyle;
      },
      avatarPlaceholderText() {
        return this.avatar.placeholder.text;
      },
      formattedRegistrationDate() {
        return getFormattedRegistrationDate(this.registrationDate, 'en-US');
      },
    },
  };
</script>
