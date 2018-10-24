
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'test', component: () => import('pages/Test.vue') }
    ]
  },
  {
    path: '/connect',
    component: () => import('layouts/Connection.vue'),
    children: [
      { path: '', component: () => import('pages/Connect.vue') }
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
