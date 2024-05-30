<script setup lang="ts">
const props = defineProps({
    class: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <div :class="class">
        Wrapper!
        <slot></slot>
    </div>
</template>