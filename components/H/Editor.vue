<script setup>
import ckeditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const data = defineModel()

const editor = ref(null)
const editorConfig = {
  toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
}

console.log(data)

// onMounted(async () => {
//   if (process.client) {
//     const { default: ClassicEditor } = await import('@ckeditor/ckeditor5-build-classic')
//     editor.value = ClassicEditor
//     console.log(editor.value)
//   }
// })
</script>

<template>
  <ckeditor.component 
			:editor="ClassicEditor" 
			:config="editorConfig" 
			v-model="data"
		/>
</template>
