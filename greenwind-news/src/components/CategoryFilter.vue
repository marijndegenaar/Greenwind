<template lang="pug">
  nav.filter
    .nav-item.close
      //- router-link(:to='/')
      img(src="../assets/img/close.svg")
    .nav-item(@click='setFilter', data-category='energy')
      img(src="../assets/img/icon_energy.svg")
    .nav-item(@click='setFilter', data-category='offshore')
      img(src="../assets/img/icon_offshore.svg")
    .nav-item(@click='setFilter', data-category='operations')
      img(src="../assets/img/icon_operations.svg")
</template>

<script>
import $ from 'domtastic'

export default {
  name: 'category-filter',
  data () {
    return {
    }
  },
  methods: {
    setFilter (e) {
      let toSet
      const t = $(e.currentTarget)
      const category = t.attr('data-category')
      const navitems = $('.filter .nav-item')

      if (t.hasClass('is-active')) { // off
        navitems.removeClass('is-active').removeClass('inactive')
        toSet = 'all'
      } else { // on
        navitems.addClass('inactive').removeClass('is-active')
        t.removeClass('inactive').addClass('is-active')
        toSet = category
      }

      this.$store.dispatch('setActiveFilter', toSet)
    }
  }
}
</script>


<style lang="sass" scoped>
  @import '../assets/config.sass'
  .filter
    display: flex
    flex-direction: column
    background: $white
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50)
    .nav-item *
      cursor: pointer
    .nav-item
      cursor: pointer
      transition: all 300ms
      img
        width: 36px
        height: 36px
        max-height: none
    .close img
      width: 28px
      height: 28px
    .is-active
      transform: scale(1.1)
    .inactive
      opacity: 0.5
    .close.inactive
      opacity: 1
</style>
