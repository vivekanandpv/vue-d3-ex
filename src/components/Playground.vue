<template>
  <div>
    <h3>Playground: State Management</h3>
    <hr />
    <button type="button" class="btn btn-primary" @click="like">
      Likes <span class="badge badge-light">{{ nLikes }}</span>
    </button>
    <button type="button" class="btn btn-primary ml-4" @click="dislike">
      Dislikes <span class="badge badge-light">{{ nDislikes }}</span>
    </button>
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
  methods: {
    like() {
      this.$store.commit('like');
    },
    dislike() {
      this.$store.commit('dislike');
    },
  },
};
</script>
