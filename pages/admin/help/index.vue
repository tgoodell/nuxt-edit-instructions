<script setup>
const helpArticleApi = useHelpArticleApi()
const { data, error } = await helpArticleApi.list()

function truncateHtml(html, maxLength) {
  // Remove HTML tags using a regular expression
  const plainText = html.replace(/<[^>]+>/g, '')

  // Truncate the plain text
  if (plainText.length > maxLength)
    return `${plainText.slice(0, maxLength)}...`
  else
    return plainText
}
</script>

<template>
  <PageWrapper class="max-w-screen-lg m-auto">
    <PageHeader page-title="Help Articles" />
    <AdminMenubar class="mb-3 mt-1" />

    <div class="border-2 p-2">
      <ul>
        <li v-for="article in data"><HLink :to="`/admin/help/${article.slug}`">{{ article.title }}</HLink></li>
      </ul>
    </div>
  </PageWrapper>
</template>
