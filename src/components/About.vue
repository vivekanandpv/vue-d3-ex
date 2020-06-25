<template>
  <div>
    <h3>About Page</h3>
    <hr />
    <p>We got: {{ queryParams }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryParams: this.$route.query,
    };
  },
};
</script>
