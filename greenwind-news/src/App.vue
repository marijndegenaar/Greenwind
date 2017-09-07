<template lang="pug">
  #app
    #app-body
      #logo
        img(src="./assets/img/news.svg")
      category-filter.filter
      sidebar.sidebar
      section.main
        .the-post
          transition(name="slide-fade", mode="out-in" appear)
            router-view
</template>

<script>
import Sidebar from '@/components/Sidebar'
import CategoryFilter from '@/components/CategoryFilter'

export default {
  name: 'app',
  components: { Sidebar, CategoryFilter }
}
</script>

<style lang="sass">
  @import './assets/bulmaConfig.sass'
  @import './assets/config.sass'
  @import './assets/animation.sass'
  @import './assets/App.sass'

  #logo
    position: fixed
    top: 20px
    right: 30px
    z-index: 100
    img
      width: 110px
  .sidebar
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25)
    width: 35vw
    height: 100vh
    overflow-x: hidden
    overflow-y: auto
    position: fixed
    left: 80px
    top: 0
    z-index: 5
  .main
    position: absolute
    left: calc(35vw + 80px)
    width: calc(65vw - 80px)
    height: 100vh
    overflow-x: hidden
    overflow-y: auto
    padding-top: 40px
  .filter
    position: fixed
    top: 0
    left: 0
    width: 80px
    height: 100vh
    z-index: 10
    padding-top: 20px
</style>
