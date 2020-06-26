<template>
  <div>
    <h3>Playground: State Management</h3>
    <hr />
    <p>Likes: {{ nLikes }}</p>
    <p>Dislikes: {{ nDislikes }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    nLikes() {
      return this.$store.state.likes;
    },
    nDislikes() {
      return this.$store.state.dislikes;
    },
  },
};
</script>
