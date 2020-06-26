<template>
  <div>
    <h3>Playground: Users</h3>
    <hr />
  </div>
</template>

<script>
export default {
  async created() {
    try {
      //  since the http client is configured for global injector,
      //  we can use it as part of every child
      const data = await this.$http.get(`users?page=2`);
      console.log('Server', data);
    } catch (error) {
      console.log('Error', error);
    }
  },
};
</script>
