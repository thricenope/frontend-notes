## 嵌套路由

https://router.vuejs.org/zh/guide/essentials/nested-routes.html

## 访问路由的2种方式

```js
// 1.

<router-link to="/"></router-link>

// 2.

this.$router.push('/')

const router = useRouter()
router.push('/')

```

## 环境变量

https://cn.vitejs.dev/guide/env-and-mode.html#env-files

.env.development

```txt

NODE_MODE=development
VITE_APP_BASE_URL= http://172.xxx
VITE_APP_TABLE_URL= http://172.xxx

```

.env.production

```txt

NODE_ENV=production
VITE_APP_BASE_URL= /
VITE_APP_TABLE_URL= /

```

main.js

```js
console.log(import.meta.env)
```

## 获取路由里参数

```js

$route.params.id

// 
const route = useRoute()
route.params.id
```

## 

