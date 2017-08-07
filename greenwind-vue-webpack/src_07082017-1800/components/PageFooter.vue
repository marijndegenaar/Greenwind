<template lang="pug">
  footer
    div i am thee footer
    div {{ msg }}
</template>

<script>
export default {
  name: 'page-footer',
  data () {
    return {
      msg: 'i am some more footer txt'
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../assets/config.sass'

  footer
    background: blue
    overflow-y: hidden
    padding: 1rem 0 0 0
    height: calc(#{$page-footer-height} - 1rem)
    margin: 0
    text-align: center
    color: $white
</style>
