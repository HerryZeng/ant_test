import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
// import Index from './components/Index.vue'

const WebHistory = createWebHistory()

const router = createRouter({
    history: WebHistory,
    routes: [
        {
            path: "/home",
            name: "home",
            component: Home,
        },
        {
            path: "/",
            name: "index",
            component: () => import('./components/Index.vue')
        },
    ]
})

export default router