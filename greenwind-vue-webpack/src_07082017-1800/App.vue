<template lang="pug">
  #app
    nav-bar
    #app-body
      transition(name="bounce", mode="out-in" appear)
        router-view
    page-footer
</template>

<script>
import NavBar from '@/components/NavBar'
import PageFooter from '@/components/PageFooter'

export default {
  name: 'app',
  components: { NavBar, PageFooter }
}
</script>

<style lang="sass">
   @import './assets/main.sass'
   @import '~bulma/sass/utilities/_all'
   @import "~bulma"
   @import "~buefy/src/scss/buefy"
</style>
