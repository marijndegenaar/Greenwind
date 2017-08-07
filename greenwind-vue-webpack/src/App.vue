<template lang="pug">
  #app
    #app-body.container
      category-filter
      .columns
        sidebar.column.is-4
        transition(name="bounce", mode="out-in" appear)
          router-view
</template>

<script>
import Sidebar from '@/components/Sidebar'
import CategoryFilter from '@/components/CategoryFilter'

export default {
  name: 'app',
  components: { Sidebar, CategoryFilter },
  created () {
    // get prismic posts from API and save in vuex store
    this.$store.dispatch('fetchPrismicPosts', { self: this })
  }
}
</script>

<style lang="sass">
  @import './assets/main.sass'

  html
    background: $grey-lighter
  body, .container
    background: $white
</style>
