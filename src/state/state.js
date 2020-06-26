import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    likes: 0,
    dislikes: 0,
  },
  mutations: {
    like(state, count) {
      state.likes += count;
    },
    dislike(state, count) {
      state.dislikes += count;
    },
  },
});
