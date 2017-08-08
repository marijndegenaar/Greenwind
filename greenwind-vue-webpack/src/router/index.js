import Vue from 'vue'
import Router from 'vue-router'

// import All from '@/components/All'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Post },
    { path: '/:id', component: Post }
  ]
})
