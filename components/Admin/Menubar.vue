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
        Admin Menubar!
    </div>
</template>