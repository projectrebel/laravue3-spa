<template>
  <h1 class="text-2xl font-bold">Page 1</h1>
  <pre>
    {{ user }}
  </pre>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  setup() {
    const user = ref({});
    onMounted(() => {
      axios.get('/api/user').then(response => { user.value = response.data});
    });

    return {
      user
    }
  }
};
</script>
