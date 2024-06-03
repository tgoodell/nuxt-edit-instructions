<script setup lang="ts">
function someErrorLogger(err) {
  console.log('got an error', err);
}
</script>

<template>
  
  <PageWrapper class="max-w-screen-lg m-auto">
    <PageHeader page-title="Help Articles" />
    <AdminMenubar class="mb-3 mt-1" />
    <div class="border-2 p-2">
      <NuxtErrorBoundary @error="someErrorLogger">
        <ArticleList :data="data" />
        <!-- <template #error="{ error, clearError }"> -->
          <!-- <h2 class="text-2xl semibold">Error: Unable to Fetch Articles</h2>
          <p>Unable to fetch list of articles due to a network error.</p> -->
          <!-- {{error}} -->
        <!-- </template> -->
        <template #error="ctx"> An error happened. </template>
      </NuxtErrorBoundary>
    </div>
  </PageWrapper>
</template>
