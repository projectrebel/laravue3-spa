<template>
  <transition name="fade">
    <div v-show="showMobileMenu" class="fixed inset-0 flex z-40">
        <div class="fixed inset-0">
          <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>
        <transition name="slide-from-left">
          <div
            v-show="showMobileMenu"
            class="relative flex-1 flex flex-col max-w-xs w-full bg-white"
          >
            <div class="absolute top-0 right-0 -mr-12 pt-2">
              <button
                @click="setShowMobileMenu(false)"
                class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none"
              >
                <span class="sr-only">Close sidebar</span>
                <svg
                  class="h-6 w-6 text-white"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div class="flex-shrink-0 flex items-center px-4">
                <img
                  class="h-8 w-auto"
                  src="/images/laravue3-logo.png"
                  alt="logo"
                />
              </div>
              <app-nav-items @click="setShowMobileMenu(false)" />
            </div>
            <app-nav-profile />
          </div>
        </transition>
        <div class="flex-shrink-0 w-14"></div>
    </div>
  </transition>

  <div class="hidden md:flex md:flex-shrink-0">
    <div class="flex flex-col w-64">
      <div class="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
        <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div class="flex items-center flex-shrink-0 px-4">
            <img
              class="h-8 w-auto"
              src="/images/laravue3-logo.png"
              alt="logo"
            />
          </div>
          <app-nav-items />
        </div>
        <app-nav-profile />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import AppNavItems from "./AppNavItems";
import AppNavProfile from "./AppNavProfile";

export default {
  components: {
    AppNavItems,
    AppNavProfile,
  },

  setup() {
    const store = useStore();
    const showMobileMenu = computed(() => store.state.showMobileMenu);
    function setShowMobileMenu(value) {
      if (typeof value !== "boolean") {
        console.log("Value must be a boolean");
        return;
      }

      store.commit("setShowMoblieMenu", value);
    }

    return {
      // Data
      showMobileMenu,

      // Functions
      setShowMobileMenu,
    };
  },
};
</script>
