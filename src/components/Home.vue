<template>
  <div>
    <h3>Hello, welcome to home</h3>
    <hr />
    <h4>
      Dynamic Components
      <button class="btn btn-warning" @click="toggle">Toggle</button>
    </h4>
    <component :is="comp"></component>
  </div>
</template>

<script>
import Welcome from './Welcome';
import Starter from './Starter';

export default {
  data() {
    return {
      comp: Welcome,
    };
  },
  methods: {
    toggle() {
      if (this.comp === Welcome) {
        this.comp = Starter;
      } else {
        this.comp = Welcome;
      }
    },
  },
};
</script>
