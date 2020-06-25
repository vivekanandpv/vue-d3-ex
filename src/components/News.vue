<template>
  <div>
    <h3>News Page</h3>
    <p>City: {{ city }}, year: {{ year }}</p>
    <p>Params: {{ params }}</p>
  </div>
</template>

<script>
export default {
  props: ['city', 'year'],
  data() {
    return {
      //   city: this.$route.params.city,
      //   year: this.$route.params.year,
      params: this.$route.params,
    };
  },
};
</script>
