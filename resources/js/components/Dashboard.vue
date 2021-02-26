<template>
    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6 bg-white border-b border-gray-200">
            {{ user }}
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup(props, {}) {
    const user = ref({});

    function getUser() {
        axios.get('/api/user/')
            .then(response => user.value = response.data)
            .catch(error => user.value = error);
    }

    onMounted(() => {
        getUser();
    });

    return {
        user
    }
  },
};
</script>
