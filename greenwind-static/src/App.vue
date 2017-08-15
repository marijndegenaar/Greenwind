<template lang="pug">
  #app
    router-view
</template>

<script>
  // import Whatever from '@/components/Whatever'

  export default {
    name: 'app',
    // components: { Whatever },
    watch: {
      '$route': 'routeChange'
    },
    methods: {
      routeChange () {
        const route = this.$route
        console.log(route)
      }
    }
  }
</script>

<style lang="sass">
  @import './assets/sass/bulmaConfig.sass'
  @import './assets/sass/config.sass'
  @import './assets/sass/animation.sass'
  @import './assets/sass/root.sass'
</style>
