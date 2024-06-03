<script setup lang="ts">
const helpArticleApi = useHelpArticleApi()
const { data, error } = await helpArticleApi.list()

if (error) {
    throw new Error('Bob')
}
</script>

<template>
    <ul>
        <li v-for="article in data"><HLink :to="`/admin/help/${article.slug}`">{{ article.title }}</HLink></li>
    </ul>
</template>