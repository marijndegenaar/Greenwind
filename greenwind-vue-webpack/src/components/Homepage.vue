<template>
  <div class="hello">
    <h1>{{ msg.en }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: { en: 'Welcome to Greenwind', de: 'Heil' }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
h1, h2
  font-weight: normal
a
  color: #42b983
</style>
