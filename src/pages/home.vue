<template>
  <div>
    Hi :3
  </div>
</template>

<script>
  import { login, verifyToken } from '../api';
  import { getUrlParameters } from '../utils';
  import { AUTH_TOKEN } from '../constants';

  export default {
    name: 'home',
    mounted() {
      const token = localStorage.getItem(AUTH_TOKEN);

      if (token) {
        verifyToken(token);
      } else {
        const urlParameters = getUrlParameters();

        if (urlParameters) {
          login(urlParameters).then((user) => {
            console.log(user);
          });
        }
      }
    },
  };
</script>
