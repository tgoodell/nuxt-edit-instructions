<script setup lang="ts">
const props = defineProps({
    to: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <RouterLink :to="to" class="underline hover:text-rose-900">
        <slot></slot>
    </RouterLink>
</template>