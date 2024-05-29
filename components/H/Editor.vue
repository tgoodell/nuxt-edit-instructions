<script setup>
const data = defineModel()

const editor = ref(null)
const editorConfig = {
  toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
}

onMounted(async () => {
  if (process.client) {
    const { default: ClassicEditor } = await import('@ckeditor/ckeditor5-build-classic')
    editor.value = ClassicEditor
  }
})
</script>

<template>
  <ckeditor
    v-if="editor"
    v-model="data"
    :editor="editor"
    :config="editorConfig"
  />
  <div v-else>
    Loading editor...
  </div>
</template>
