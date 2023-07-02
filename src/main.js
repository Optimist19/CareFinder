import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import "./assets/global.css"
import store from './store/index'

let app = createApp(App)
app.use(store).use(router).mount('#app')
