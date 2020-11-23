import { createApp } from 'vue'
import Ant from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'

import router from './router.js'
import instance from './axios.js'


// createApp(App).use(Ant).mount('#app')

const app = createApp(App)
app.use(Ant)
app.use(router)
app.mount('#app')


app.config.globalProperties.$router = router
app.config.globalProperties.$ajax=instance