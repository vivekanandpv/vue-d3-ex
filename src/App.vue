<template>
  <div id="app">
    <app-navbar></app-navbar>
    <div class="container my-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navabar from './components/Navbar';
export default {
  components: {
    'app-navbar': Navabar,
  },
};
</script>
