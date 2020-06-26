<template>
  <div>
    <h3>Playground: Users</h3>
    <hr />
  </div>
</template>

<script>
import { http } from '../lib/http';
export default {
  created() {
    //    at this point, the component is created in the v-dom
    //    right place to call external apis for initial data
    http
      .get(`users?page=2`)
      .then((r) => {
        console.log('Server', r);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  },
};
</script>
