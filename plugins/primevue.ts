import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true, importPT: { as: 'Aura', from: '~/presets/aura' }, options: { unstyled: true } })
  nuxtApp.vueApp.component('PButton', Button)
  nuxtApp.vueApp.component('PDataTable', DataTable)
  nuxtApp.vueApp.component('PColumn', Column)
  nuxtApp.vueApp.component('PInputText', InputText)
})
