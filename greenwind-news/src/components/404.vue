<template>
	<div class="wrapper">
    <h1>{{ msg }}</h1>
	</div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      msg: 'Page not found'
    }
  }
}
</script>

<style lang="sass" scoped>
h1, h2
  font-weight: normal
a
  color: #42b983
</style>
