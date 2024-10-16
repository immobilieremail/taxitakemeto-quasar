
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'hotels', component: () => import('pages/Hotels.vue') },
      { path: 'hotels/:id', name: 'hotel', component: () => import('pages/Hotel.vue') },
      { path: 'test', component: () => import('pages/Test.vue') },
      { path: 'connect', component: () => import('pages/Connect.vue') },
      { path: 'register', component: () => import('pages/Register.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
