<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug

const helpArticleApi = useHelpArticleApi()
const article = ref([])

/**
 * Fetch the relevant article based on the slug from the route
 * TODO: Use the store instead of the API
 */
async function fetchArticle() {
  article.value = await helpArticleApi.find(slug)
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
          <h2 class="text-4xl font-semibold">{{article.title}}</h2>
          <div>
            <span v-html="article.content"></span>
          </div>
          <PButton class="bg-cyan-200 px-3 py-2 hover:bg-cyan-400" @click="enableEditMode">Edit</PButton>
        </div>
        <!-- Switch into edit mode with a preview -->
        <div v-else>
          <h2 class="text-4xl font-semibold mb-2">Editing {{article.title}}</h2>
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
