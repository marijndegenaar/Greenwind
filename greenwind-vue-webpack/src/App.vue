<template lang="pug">
  #app
    nav-bar
    #app-body
      transition(name="bounce", mode="out-in" appear)
        router-view
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'app',
  components: { NavBar }
}
</script>

<style lang="sass">
   @import './assets/main.sass'
</style>
