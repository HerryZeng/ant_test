import { createApp } from 'vue'
import Ant from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'

import router from './router.js'


// createApp(App).use(Ant).mount('#app')

const app = createApp(App)
app.use(Ant)
app.use(router)
app.mount('#app')
