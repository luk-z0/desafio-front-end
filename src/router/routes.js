
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), name: "IndexPage" },
      { path: '/search', component: () => import('components/SearchPage.vue'), name: "SearchPage" },
      { path: '/peoples', component: () => import('components/Peoples.vue'), name: "People"}
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
