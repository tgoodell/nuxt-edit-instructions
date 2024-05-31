<script setup>
const route = useRoute()
const slug = route.params.slug

// const helpStore = useHelpStore()
// const article = helpStore.getArticleBySlug(slug)

const helpArticleApi = useHelpArticleApi()
const { data, error, pending, refresh } = await helpArticleApi.list()

const article = computed(() => {
  return data.value[0]
})

const inEditMode = ref(false)
const editingCopy = ref()
function enableEditMode() {
  inEditMode.value = true
  editingCopy.value = {...article.value}
}

function exitEditMode() {
  inEditMode.value = false
}

function saveEdits() {
  exitEditMode()
  helpArticleApi.edit(editingCopy.value.id, editingCopy.value.content)
  refresh()
}
</script>

<template>
  <PageWrapper class="max-w-screen-lg m-auto">
    <PageHeader page-title="Help Articles" />
    <AdminMenubar class="mb-3 mt-1" />

    <div class="border-2">
      <div class="bg-slate-50 p-2 leading-7 border-b-4">
        <div v-if="!inEditMode">
          <h2 class="text-4xl font-semibold">{{article.title}}</h2>
          <span v-html="article.content"></span>
          <PButton class="bg-cyan-200 px-3 py-2 hover:bg-cyan-400" @click="enableEditMode">Edit</PButton>
        </div>
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
      
      <div id="form" class="p-2">
        <div v-for="n in 10">
          <PlaceholderInput />
        </div>
      </div>
    </div>

  </PageWrapper>
</template>
