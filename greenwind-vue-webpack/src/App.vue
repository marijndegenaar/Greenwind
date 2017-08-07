<template lang="pug">
  #app
    #app-body
      sidebar.sidebar
      section.main
        category-filter.filter
        .the-post
          transition(name="bounce", mode="out-in" appear)
            router-view
</template>

<style lang="sass">
  @import './assets/bulmaConfig.sass'
  @import './assets/config.sass'
  @import './assets/App.sass'

  .sidebar
    border-right: 1px black solid
    width: 35vw
    height: 100vh
    overflow-x: hidden
    overflow-y: auto
    position: fixed
    top: 0
  .main
    position: absolute
    left: 35vw
    width: 65vw
    height: 100vh
    overflow-x: hidden
    overflow-y: auto
    padding-top: 100px
  .filter
    position: fixed
    top: 0
    width: 65vw
    right: 0
</style>

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
