<template>
  <div class="h-screen flex overflow-hidden bg-gray-50">
    <app-nav />
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
        <button
          @click="setShowMobileMenu(true)"
          class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span class="sr-only">Open sidebar</span>
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <main
        class="flex-1 relative z-0 overflow-y-auto focus:outline-none"
        tabindex="0"
      >
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <router-view></router-view>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

import AppNav from '../../navigation/components/AppNav';

export default {
  components: {
    AppNav,
  },

  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  setup(props, {}) {
    const store = useStore();
    const showMobileMenu = computed(() => store.state.showMobileMenu);

    onMounted(() => {
      store.commit('setUser', props.user);
    })

    function setShowMobileMenu(value) {
      if (typeof value !== "boolean"){
        console.log('Value must be a boolean');
        return;
      }

      store.commit('setShowMoblieMenu', value);
    }

    return {
      showMobileMenu,

      setShowMobileMenu
    };
  },
};
</script>
