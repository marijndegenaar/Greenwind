<template lang="pug">
  .wrapper
    h1 suck it
    el-button(type="success") Hello
    p {{ msg }}
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      msg: 'homepage text...'
    }
  }
}
</script>

<style lang="sass" scoped>
  h1
    color: pink
</style>
