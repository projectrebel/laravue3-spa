<template>
  <div class="flex-shrink-0 flex border-t border-gray-200">
    <router-link
      :to="{ name: 'user-profile' }"
      exact
      class="flex-shrink-0 w-full group block p-4"
    >
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
    </router-link>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);

    return {
      user,
    };
  },
};
</script>
