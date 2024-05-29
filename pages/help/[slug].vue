<script setup>
const route = useRoute()
const slug = route.params.slug

const helpStore = useHelpStore()
const article = helpStore.getArticleBySlug(slug)
</script>

<template>
  <PageWrapper class="max-w-screen-2xl">
    <PageHeader page-title="Help Articles" />
    <AdminMenubar class="mb-3" />

    <ClientOnly>
      <div class="prose">
        <HEditor v-model="article.content" />
      </div>
    </ClientOnly>
  </PageWrapper>
</template>
