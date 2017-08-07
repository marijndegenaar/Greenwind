<template lang="pug">
  nav#filter
    b-tabs(v-model='activeFilter', position='is-right')
      b-tab-item(label='All')
      b-tab-item(label='Energy', icon="battery_charging_full")
      b-tab-item(label='Operations', icon="contact_phone")
      b-tab-item(label='Offshore', icon="toys")
</template>

<script>
export default {
  name: 'category-filter',
  data: () => ({
    activeFilter: 0
  }),
  watch: {
    activeFilter: (val) => {
      // val is numerical i
      console.log('activeFilter: ' + val)
    }
  }
}
</script>

<style lang="sass" scoped>
  nav ul, nav li
    margin: 0
    padding: 0
</style>
