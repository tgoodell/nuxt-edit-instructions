<script setup lang="ts">
import type { RouteLocation } from 'vue-router';
import type { ArticleEntry } from '~/interfaces';

const route = useRoute()
const slug = route.params.slug

const helpArticleApi = useHelpArticleApi()
const article = ref<ArticleEntry>({
  slug: '',
  created_at: '',
  updated_at: '',
  deleted_at: '',
  title: '',
  content: '',
  category: ''
})
const hasError = ref(false)

/**
 * Fetch the relevant article based on the slug from the route
 * Also handle the Network Error message
 */
async function fetchArticle() {
  // Typescript Type Checking
  const slugToCheck = ref()
  if (Array.isArray(slug)) {
    slugToCheck.value = slug[0]
  }
  else {
    slugToCheck.value = slug
  }
  
  const attempt: ArticleEntry | undefined = await helpArticleApi.find(slugToCheck.value)

  // If the error field exists in the attempt we got
  if (!attempt) {
    hasError.value = true
    // Replace the article with Network Error information
    // article.value = {
    //   'title': "Network Error",
    //   'content': `Unable to fetch instructions about ${slug}. Please return home or contact an administrator.`
    // }
  }
  else {
    hasError.value = false
    // Otherwise, just set the article to the attempt
    article.value = attempt
  }
}

fetchArticle()

const inEditMode = ref(false)
const editingCopy = ref()

/**
 * Enable edit mode and make a deep copy of the article
 */
function enableEditMode() {
  inEditMode.value = true
  editingCopy.value = {...article.value}
}

/**
 * Cleaning up and exiting edit mode
 */
function exitEditMode() {
  inEditMode.value = false
  editingCopy.value = ''
}

/**
 * Save the edits by exiting edit mode, submitting edits to the backend, and refreshing
 * This currently saves html tags to the database, but this is required if we want users to bold text, add links, etc.
 * Ck5Editor automatically escapes any HTML that is typed, so no extra work is needed on our parts
 */
function saveEdits() {
  console.log(editingCopy.value)
  helpArticleApi.edit(editingCopy.value.slug, editingCopy.value.content)
  exitEditMode()
  fetchArticle()
}
</script>

<template>
  <PageWrapper class="max-w-screen-lg m-auto">
    <PageHeader page-title="Help Articles" />
    <AdminMenubar class="mb-3 mt-1" />

    <div class="border-2">
      <div class="bg-slate-50 p-2 leading-7 border-b-4">
        <!-- Print out instructions normally -->
        <div v-if="!inEditMode">
          <h2 class="text-4xl font-semibold">{{ article.title }}</h2>
          <div>
            <span v-html="article.content"></span>
          </div>
          <PButton class="bg-cyan-200 px-3 py-2 hover:bg-cyan-400" @click="enableEditMode" v-if="!hasError">Edit</PButton>
        </div>
        <!-- Switch into edit mode with a preview -->
        <div v-else>
          <h2 class="text-4xl font-semibold mb-2">Editing {{ article.title }}</h2>
          <ClientOnly>
            <div class="prose">
              <HEditor v-model="editingCopy.content" />
              <h3 class="bold text-lg mt-2">Preview</h3>
              <span v-html="editingCopy.content"></span>
            </div>
          </ClientOnly>
          <div class="mt-2">
            <PButton class="bg-red-200 px-3 py-2 hover:bg-red-400 mr-2" @click="exitEditMode">Cancel</PButton>
            <PButton class="bg-green-200 px-3 py-2 hover:bg-green-400" @click="saveEdits">Save</PButton>
          </div>
        </div>
      </div>
      <!-- Placeholder to give an idea of what the form looks like below -->
      <div id="form" class="p-2">
        <div v-for="n in 10">
          <PlaceholderInput />
        </div>
      </div>
    </div>
  </PageWrapper>
</template>
