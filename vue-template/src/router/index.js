import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            // name: 'home',
            component: () => import('../views/Home.vue'),
            meta: {
                title: '首页'
            },
            // redirect: '/welcome',
            children: [
                {
                    // name: 'test',
                    path: '',
                    component: () => import('../views/Test.vue'),
                    meta: {
                        title: '测试页'
                    }  //meta除了提供信息 还可以卡权限
                }, {
                    name: 'welcome',
                    path: 'welcome',
                    component: () => import('../views/Welcome.vue'),
                    meta: {
                        title: '欢迎页'
                    }  //meta除了提供信息 还可以卡权限
                },
                {
                    name: 'login',
                    path: 'login',
                    component: () => import('../views/Login.vue'),
                    meta: {
                        title: '登录'
                    }  //meta除了提供信息 还可以卡权限
                },
            ]
        },
        {
            path: '/test',
            name: 'test',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/Test.vue')
        }
    ]
})

export default router
