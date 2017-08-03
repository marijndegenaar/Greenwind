<template lang="pug">
  #menu.pinned
    router-link.menu-item(to="/") Home
    router-link.menu-item(to="/about") About
    router-link.menu-item(to="/contact") Contact
    router-link.menu-item(to="/prismic") Prismic
    //- router-link.menu-item(to="/prismicaxios") PrismicAxios
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style lang="sass" scoped>
  @import '../assets/config.sass'

  #menu
    width: 100%
    height: $nav-bar-height
    display: flex
    align-items: center
    justify-content: center
    box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.15)
    background: $white
    z-index: $nav-bar-z-index
    &.pinned
      position: fixed
      top: 0
      left: 0
  .menu-item
    background: #dedede
    color: black
    text-decoration: none
    padding: 10px 20px
    border-radius: 3px
    margin: 0 10px
    transition: all 300ms
  .router-link-exact-active
    transition: all 300ms
    background: blue
    color: white
    transform: scale(1.1)
</style>
