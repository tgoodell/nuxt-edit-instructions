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
  <PageWrapper class="max-w-screen-2xl">
    <PageHeader page-title="Help Articles" />
    <AdminMenubar class="mb-3" />

    <PDataTable :value="data">
      <PColumn field="category" header="Category" />
      <PColumn field="slug" header="Unique ID" />
      <PColumn field="title" header="Title" />
      <PColumn field="content" header="Content">
        <template #body="slotProps">
          <div class="flex items-center">
            <HLink :to="`/admin/help/${slotProps.data.slug}`">
              <PButton
                severity="info"
                icon="pi pi-pencil"
                size="small"
              />
            </HLink>
            <div v-html="truncateHtml(slotProps.data.content, 56)" />
          </div>
        </template>
      </PColumn>
      <PColumn field="created_at" header="Created at" />
      <PColumn field="updated_at" header="Updated at" />
    </PDataTable>
  </PageWrapper>
</template>
