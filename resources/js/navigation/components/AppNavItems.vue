<template>
  <nav class="mt-5 px-2 space-y-1">
    <router-link
      v-for="(route, index) in primaryRoutes"
      :key="index"
      :to="{ name: route.name }"
      exact
      class="hover:bg-gray-50 text-gray-600 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
    >
      {{ route.meta.title }}
    </router-link>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const primaryRoutes = computed(() => router.options.routes.filter(route => route.meta.primary));

    return {
      // Data
      primaryRoutes
    }
  }
};
</script>
