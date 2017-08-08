import Vue from 'vue'
import Router from 'vue-router'

/* Lazy Loading Routes */
// const NotFound = () => import('@/components/404')
// const Homepage = () => import('@/components/Homepage')
// const About = () => import('@/components/About')

/* Regular loading */
// import NotFound from '@/components/404'
// import Homepage from '@/components/Homepage'
// import About from '@/components/About'
// import Contact from '@/components/Contact'
// import PrismicAxios from '@/components/PrismicAxios'
import All from '@/components/All'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // { path: '*', component: NotFound },
    { path: '/', component: All },
    { path: '/:id', component: Post }
    // { path: '/about', component: About },
    // { path: '/contact', component: Contact },
    // { path: '/prismic', component: Prismic }
    // { path: '/prismicaxios', component: PrismicAxios },
  ]
})
