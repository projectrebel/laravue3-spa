import { createStore } from 'vuex';

export const store = new createStore({
  state() {
    return {
      showMobileMenu: false,
      user: {},
    };
  },

  mutations: {
    setShowMobileMenu(state, user) {
      state.user = user;
    },
    setUser(state, user) {
      state.user = user;
    }
  },

  getters: {
    showMobileMenu: state => state.showMobileMenu,
    user: state => state.user,
  },
});
