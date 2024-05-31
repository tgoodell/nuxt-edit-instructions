<script setup lang="ts">
const props = defineProps({
    class: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <div :class="class" class="bg-slate-100 p-2">
        Admin Menubar!
    </div>
</template>