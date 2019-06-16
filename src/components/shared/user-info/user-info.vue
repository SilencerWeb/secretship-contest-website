<template>
  <div class="user-info">
    <container-component className="user-info__inner">
      <img class="user-info__avatar" :src="avatarUrl" :alt="fullName" v-if="avatarUrl">
      <div
          class="user-info__avatar user-info__avatar_placeholder"
          :style="avatarPlaceholderBackgroundColorStyle"
          v-else
      >
        {{ avatarPlaceholderText }}
      </div>

      <div class="user-info__details">
        <p class="user-info__details-line" v-if="id">
          ID: <span>{{ id }}</span>
        </p>

        <p class="user-info__details-line" v-if="fullName">
          Name: <span>{{ fullName }}</span>
        </p>

        <p class="user-info__details-line" v-if="username">
          Username: <a :href="usernameLink" target="_blank">{{ username }}</a>
        </p>

        <p class="user-info__details-line" v-if="formattedRegistrationDate">
          Date of registration: <span>{{ formattedRegistrationDate }}</span>
        </p>

        <p class="user-info__details-line" v-if="languageCode">
          Language code: <span>{{ languageCode }}</span>
        </p>
      </div>
    </container-component>
  </div>
</template>

<style lang="scss" scoped>
  .user-info {
    padding-top: 25px;

    &__inner {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__avatar {
      width: 150px;
      height: 150px;
      border-radius: 150px;
      margin-right: 15px;

      &_placeholder {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 35px;
        font-weight: 700;
        color: #ffffff;
        background-color: var(--accent-color);
      }
    }

    &__details-line {
      font-size: 18px;
      font-weight: 500;
      margin-top: 0;
      margin-bottom: 0;

      a,
      span {
        font-weight: 400;
      }

      a {
        text-decoration: none;
        color: var(--accent-color);

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>

<script>
  import ContainerComponent from '../container/container';
  import { getRandomNumber } from '../../../utils';

  export default {
    name: 'UserInfoComponent',
    props: {
      id: String,
      firstName: String,
      lastName: String,
      username: String,
      registrationDate: String,
      languageCode: String,
      avatarUrl: String,
    },
    computed: {
      fullName() {
        if (!this.lastName) return this.firstName;

        return `${this.firstName} ${this.lastName}`;
      },
      avatarPlaceholderBackgroundColorStyle() {
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
      avatarPlaceholderText() {
        const { firstName, lastName } = this;

        const firstLetterOfFirstName = firstName.slice(0, 1);
        let firstLetterOfLastName = '';

        if (lastName) {
          firstLetterOfLastName = lastName.slice(0, 1);
        }

        return `${firstLetterOfFirstName}${firstLetterOfLastName}`.toLocaleUpperCase();
      },
      usernameLink() {
        return `https://t.me/${this.username}`;
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
    components: {
      ContainerComponent,
    },
  };
</script>
