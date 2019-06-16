<template>
  <div class="user-card" :class="className">
    <router-link class="user-card__inner" :to="routerLink">
      <img class="user-card__avatar" :src="avatarUrl" :alt="fullName" v-if="avatarUrl">
      <div
          class="user-card__avatar user-card__avatar_placeholder"
          :style="getAvatarPlaceholderBackgroundColorStyle"
          v-else
      >
        {{ getAvatarPlaceholderText }}
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

    &:hover {
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
    }

    &__name {
      font-size: 14px;
      color: var(--primary-color);
      margin-top: 0;
      margin-bottom: 0;
    }

    &__registration-date {
      font-size: 13px;
      color: var(--secondary-color);
    }
  }
</style>

<script>
  import { getRandomNumber } from '../../../utils';

  export default {
    name: 'UserCardComponent',
    props: {
      className: String,
      id: String,
      firstName: String,
      lastName: String,
      registrationDate: String,
      avatarUrl: String,
    },
    computed: {
      routerLink() {
        return `/user/${this.id}`;
      },
      fullName() {
        if (!this.lastName) return this.firstName;

        return `${this.firstName} ${this.lastName}`;
      },
      getAvatarPlaceholderBackgroundColorStyle() {
        const backgroundColors = [ // Colors are taken from macOS Telegram client
          { top: '#ffac8e', bottom: '#ff8597' },
          { top: '#ffdc97', bottom: '#ffc28d' },
          { top: '#a8c8ff', bottom: '#948fff' },
          { top: '#cdffb2', bottom: '#90f4a0' },
          { top: '#8bffee', bottom: '#6af1e2' },
          { top: '#9de3ff', bottom: '#6cc2ff' },
          { top: '#f1c4ff', bottom: '#ee9cff' },
        ];

        const randomNumber = getRandomNumber(0, backgroundColors.length);
        const randomBackgroundColor = backgroundColors[randomNumber];

        return `background-image: linear-gradient(to bottom, ${randomBackgroundColor.top}, ${randomBackgroundColor.bottom});`;
      },
      getAvatarPlaceholderText() {
        const { firstName, lastName } = this;

        const firstLetterOfFirstName = firstName.slice(0, 1);
        let firstLetterOfLastName = '';

        if (lastName) {
          firstLetterOfLastName = lastName.slice(0, 1);
        }

        return `${firstLetterOfFirstName}${firstLetterOfLastName}`.toLocaleUpperCase();
      },
      formattedRegistrationDate() {
        const registrationDateAsDate = new Date(this.registrationDate);

        return registrationDateAsDate.toLocaleDateString(
          'en-US',
          {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          },
        );
      },
    },
  };
</script>
