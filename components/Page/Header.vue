<script setup lang="ts">
const props = defineProps({
    pageTitle: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <h1>{{ pageTitle }}</h1>
</template>