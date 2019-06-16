<template>
  <div class="loader">
    <div class="loader__circle">
      <svg class="loader__svg" viewBox="25 25 50 50">
        <circle class="loader__path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/styles/variables";
  @import "../../assets/styles/mixins";

  .loader {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;

    &__circle {
      position: relative;
      width: 100px;

      @include sm-down {
        width: 75px;
      }

      &:before {
        content: '';
        display: block;
        padding-top: 100%;
      }
    }

    &__svg {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-origin: center center;
      animation: rotate 2s linear infinite;
    }

    &__path {
      stroke: var(--accent-color);
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }

    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes dash {
      0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
      }
      100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
      }
    }
  }
</style>

<script>
  export default {
    name: 'LoaderComponent',
  };
</script>
