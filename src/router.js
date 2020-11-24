import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue';
// import Index from './components/Index.vue'
import book from './components/Books.vue';
import book_detail from './components/BookDetail.vue';
import post_test from './components/PostTest.vue';
import fileupload from './components/FileUpload.vue';
import fileuploads from './components/FileUploads.vue';

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
        {
            path: "/books",
            name: "Book",
            component: book,
        },
        {
            path: "/book_detail/:id",
            name: "BookDetail",
            component: book_detail,
        },
        {
            path: "/post_test",
            name: "PostTest",
            component: post_test,
        },
        {
            path: "/fileupload",
            name: "FileUpload",
            component: fileupload,
        },
        {
            path: "/fileuploads",
            name: "FileUploads",
            component: fileuploads,
        },
    ]
})

export default router