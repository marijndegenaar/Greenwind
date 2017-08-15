import Vue from 'vue'
import Router from 'vue-router'
import Splash from '@/components/Splash'
import EnergyProfil from '@/components/01_Profil'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Splash },
    { path: '/energy/profil', component: EnergyProfil }
  ]
})
