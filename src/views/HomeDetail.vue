<template>
    <div>id la {{ id }}</div>
</template>
<script>
    import { ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    export default {
        setup() {
            const route = useRoute();
            const id = ref(route.params.id);
            return {
                id
            }
        }
    } 
</script>