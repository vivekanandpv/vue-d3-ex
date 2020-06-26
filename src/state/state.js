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
  actions: {
    //  mutation is abstracted
    //  actions can be asynchronous
    //  promise chaining can be used
    //  to create composite actions
    //  with complex async workflows
    likeAsync(context, count) {
      setTimeout(() => {
        context.commit('like', count);
      }, 250);
    },
    dislikeAsync(context, count) {
      setTimeout(() => {
        context.commit('dislike', count);
      }, 250);
    },
  },
});
