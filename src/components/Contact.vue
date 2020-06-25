<template>
  <div>
    <h3>Contact Page</h3>
    <hr />
    <button class="btn btn-primary" @click="navigate">Go to About</button>
  </div>
</template>

<script>
export default {
  methods: {
    navigate() {
      this.$router.push({ path: '/about', query: { x: 100, y: 'India' } });
    },
  },
};
</script>
