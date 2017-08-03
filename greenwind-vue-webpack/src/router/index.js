import Vue from 'vue'
import Router from 'vue-router'

/* Lazy Loading Routes */
// const NotFound = () => import('@/components/404')
// const Homepage = () => import('@/components/Homepage')
// const About = () => import('@/components/About')

/* Regular loading */
import Homepage from '@/components/Homepage'
import About from '@/components/About'
import NotFound from '@/components/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '*', component: NotFound },
    { path: '/', component: Homepage },
    { path: '/about', component: About }
  ]
})
