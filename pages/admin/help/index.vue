<script setup>
const helpArticleApi = useHelpArticleApi()
const { data, error } = await helpArticleApi.list()
</script>

<template>
  <PageWrapper class="max-w-screen-lg m-auto">
    <PageHeader page-title="Help Articles" />
    <AdminMenubar class="mb-3 mt-1" />
    <div class="border-2 p-2">
      <ul v-if="!error">
        <li v-for="article in data"><HLink :to="`/admin/help/${article.slug}`">{{ article.title }}</HLink></li>
      </ul>
      <div v-else>
        <h2 class="text-2xl semibold">Error: Unable to Fetch Articles</h2>
        <p>Unable to fetch list of articles due to a network error.</p>
      </div>
    </div>
  </PageWrapper>
</template>
