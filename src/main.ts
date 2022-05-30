import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store/index.vuex'
import { createPinia } from 'pinia'

createApp(App)
  .use(router)
  .use(createPinia())
  // .use(store)
  .mount('#app')
