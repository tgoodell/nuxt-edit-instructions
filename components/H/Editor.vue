<script setup>
import ckeditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const data = defineModel()

const editorConfig = {
  toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
}

</script>

<template>
  <ckeditor.component 
		:editor="ClassicEditor" 
		:config="editorConfig" 
		v-model="data"
	/>
</template>
