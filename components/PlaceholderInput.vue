<script setup lang="ts">
const randomWidthInput = computed(() => {
    return `${Math.floor(Math.random() * 81) + 20}%`
})
const randomWidthText = computed(() => {
    return `${Math.floor(Math.random() * 100) + 50}px`
})
</script>

<template>
    <div class="my-2">
        <div :style="{ width: randomWidthText }" class="rounded-md block text-sm font-medium leading-6 bg-gray-600 mb-1">.</div>
        <PInputText type="text" :style="{ width: randomWidthInput }" disabled class="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2" />
    </div>
</template>