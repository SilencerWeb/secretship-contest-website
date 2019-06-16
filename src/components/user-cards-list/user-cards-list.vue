<template>
  <div class="user-cards-list">
    <container-component className="user-cards-list__inner">
      <h2 class="user-cards-list__title">{{ $t('userCardsListTitle') }}</h2>

      <div class="user-cards-list__list">
        <user-card-component
            v-for="user in users"
            :className="'user-cards-list__user-card'"
            :id="user.id"
            :firstName="user.first_name"
            :lastName="user.last_name"
            :registrationDate="user.created"
            :avatar="user.avatar"
            :key="user.id"
        />
      </div>
    </container-component>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/styles/variables";
  @import "../../assets/styles/mixins";

  .user-cards-list {
    padding-top: 25px;
    padding-bottom: 25px;

    &__list {
      display: flex;
      flex-wrap: wrap;

      @include xs-down {
        display: block;
      }
    }

    &__title {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      padding-left: 10px;
      padding-right: 10px;
      margin-top: 0;
      margin-bottom: 15px;
    }

    &__user-card {
      flex: 0 0 33.333%;

      @include sm-down {
        flex-basis: 50%;
      }
    }
  }
</style>

<script>
  import ContainerComponent from '../container/container';
  import UserCardComponent from './user-card';

  export default {
    name: 'UserCardsListComponent',
    props: {
      users: Array,
    },
    components: {
      ContainerComponent,
      UserCardComponent,
    },
  };
</script>
