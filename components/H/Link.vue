<script setup lang="ts">
const props = defineProps({
    to: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <RouterLink :to="to">
        <slot></slot>
    </RouterLink>
</template>