<template>
  <div v-show="showMobileMenu" class="md:hidden">
    <div class="fixed inset-0 flex z-40">
      <div class="fixed inset-0">
        <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
      </div>
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
          <nav class="mt-5 px-2 space-y-1">
            <router-link
              v-for="(route, index) in $router.options.routes"
              :key="index"
              :to="{ name: route.name }"
              exact
              @click="setShowMobileMenu(false)"
              class="hover:bg-gray-50 text-gray-600 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
            >
              {{ route.meta.title }}
            </router-link>
          </nav>
        </div>
        <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
          <a href="#" class="flex-shrink-0 group block">
            <div class="flex items-center">
              <div>
                <img
                  class="inline-block h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=DS9XwDWeLa&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <p
                  class="text-base font-medium text-gray-700 group-hover:text-gray-900"
                >
                  {{ user.name }}
                </p>
                <p
                  class="text-sm font-medium text-gray-500 group-hover:text-gray-700"
                >
                  View profile
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="flex-shrink-0 w-14"></div>
    </div>
  </div>

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
          <nav class="mt-5 flex-1 px-2 bg-white space-y-1">
            <router-link
              v-for="(route, index) in $router.options.routes"
              :key="index"
              :to="{ name: route.name }"
              exact
              class="hover:bg-gray-50 text-gray-600 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            >
              {{ route.meta.title }}
            </router-link>
          </nav>
        </div>
        <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
          <a href="#" class="flex-shrink-0 w-full group block">
            <div class="flex items-center">
              <div>
                <img
                  class="inline-block h-9 w-9 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=DS9XwDWeLa&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <p
                  class="text-sm font-medium text-gray-700 group-hover:text-gray-900"
                >
                  {{ user.name }}
                </p>
                <p
                  class="text-xs font-medium text-gray-500 group-hover:text-gray-700"
                >
                  View profile
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup(props) {
    const store = useStore();

    const showMobileMenu = computed(() => store.state.showMobileMenu);
    function setShowMobileMenu(value) {
      if (typeof variable !== "boolean") {
        console.log("Value must be a boolean");
        return;
      }

      store.commit("setShowMoblieMenu", value);
    }

    const user = computed(() => store.state.user);

    return {
      // Data
      showMobileMenu,
      user,

      // Functions
      setShowMobileMenu
    };
  },
};
</script>
