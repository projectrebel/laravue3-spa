import { createStore } from 'vuex';

export const store = new createStore({
  state() {
    return {
      showMobileMenu: false,
      user: {},
    };
  },

  mutations: {
    setShowMoblieMenu(state, showMobileMenu) {
      state.showMobileMenu = showMobileMenu;
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
