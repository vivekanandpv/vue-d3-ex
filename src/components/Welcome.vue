<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Welcome</h1>
    </div>
  </div>
</template>

<script>
export default {
  beforeDestroy() {
    console.log('Welcome component beforeDestroy');
  },
  destroyed() {
    console.log('Welcome component destroyed');
  },
};
</script>
