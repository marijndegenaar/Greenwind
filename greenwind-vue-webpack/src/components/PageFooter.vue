<template lang="pug">
  footer
    p i am thee footer
    p {{ msg }}
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
  footer
    background: blue
</style>
