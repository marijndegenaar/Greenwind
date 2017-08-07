<template lang="pug">
  nav#filter
    b-tabs(v-model='activeTab', position='is-right', type="is-boxed")
      b-tab-item(label='All')
      b-tab-item(label='Energy', icon="battery_charging_full")
      b-tab-item(label='Operations', icon="contact_phone")
      b-tab-item(label='Offshore', icon="toys")
</template>

<script>
export default {
  name: 'sidebar',
  data: () => ({
    activeTab: 0
  }),
  watch: {
    activeTab: (val) => {
      // val is numerical i
      console.log('tab: ' + val)
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
