<template lang="pug">
  #menu
    router-link.menu-item(to="/") Home
    router-link.menu-item(to="/about") About
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style lang="sass" scoped>
  #menu
    width: 100%
    height: 100px
    display: flex
    align-items: center
    justify-content: center
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
