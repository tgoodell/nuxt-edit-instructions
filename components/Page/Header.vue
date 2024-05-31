<script setup lang="ts">
const props = defineProps({
    pageTitle: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <h1 class="text-5xl">
        <RouterLink to="/admin/help">
            {{ pageTitle }}
        </RouterLink>
    </h1>
</template>