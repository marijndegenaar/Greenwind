<template lang="pug">
  .wrapper
    h1 {{ msg }}
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'can pass some data here from the state or API'
    }
  }
}
</script>

<style lang="sass" scoped>
  h1
    color: orange
</style>
