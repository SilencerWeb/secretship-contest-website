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
          {{ $t('userInfoDetailsIdText') }}: <span>{{ id }}</span>
        </p>

        <p class="user-info__details-line" v-if="fullName">
          {{ $t('userInfoDetailsNameText') }}: <span>{{ fullName }}</span>
        </p>

        <p class="user-info__details-line" v-if="username">
          {{ $t('userInfoDetailsUsernameText') }}: <a :href="usernameLink" target="_blank">{{ username }}</a>
        </p>

        <p class="user-info__details-line" v-if="formattedRegistrationDate">
          {{ $t('userInfoDetailsRegistrationDateText') }}: <span>{{ formattedRegistrationDate }}</span>
        </p>

        <p class="user-info__details-line" v-if="languageCode">
          {{ $t('userInfoDetailsLanguageCodeText') }}: <span>{{ languageCode }}</span>
        </p>
      </div>
    </container-component>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/styles/variables";
  @import "../../assets/styles/mixins";

  .user-info {
    padding-top: 25px;
    padding-bottom: 25px;

    &__inner {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 10px;
      padding-left: 10px;

      @include sm-down {
        display: block;
      }
    }

    &__avatar {
      flex-shrink: 0;
      width: 150px;
      height: 150px;
      border-radius: 150px;
      margin-right: 15px;

      @include sm-down {
        display: block;
        margin-right: auto;
        margin-bottom: 15px;
        margin-left: auto;
      }

      @include xs-down {
        width: 100px;
        height: 100px;
      }

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

    &__details {
      overflow: hidden;

      @include sm-down {
        text-align: center;
      }
    }

    &__details-line {
      font-size: 18px;
      font-weight: 500;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-top: 0;
      margin-bottom: 0;
      overflow: hidden;

      @include xs-down {
        font-size: 16px;
      }

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
  import {
    getFullName,
    getAvatarPlaceholderBackgroundColorStyle,
    getAvatarPlaceholderText,
    getUsernameLink,
    getFormattedRegistrationDate,
  } from '../../utils';

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
        return getFullName(this.firstName, this.lastName);
      },
      avatarPlaceholderBackgroundColorStyle() {
        return getAvatarPlaceholderBackgroundColorStyle();
      },
      avatarPlaceholderText() {
        return getAvatarPlaceholderText(this.firstName, this.lastName);
      },
      usernameLink() {
        return getUsernameLink(this.username);
      },
      formattedRegistrationDate() {
        return getFormattedRegistrationDate(this.registrationDate, 'en-US');
      },
    },
    components: {
      ContainerComponent,
    },
  };
</script>
