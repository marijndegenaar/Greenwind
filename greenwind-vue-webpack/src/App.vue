<template lang="pug">
  #app
    AppMenu
    #app-body
      transition(name="bounce", mode="out-in" appear="appear")
        router-view
</template>

<script>
import AppMenu from '@/components/AppMenu'

export default {
  name: 'app',
  components: { AppMenu }
}
</script>

<style lang="sass">
   @import './assets/main.sass'
</style>
