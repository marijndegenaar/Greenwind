<template lang="pug">
  .sidebar
    el-col(:span='1')
      el-menu.el-menu-vertical-demo(default-active='2', @open='handleOpen', @close='handleClose')
        el-menu-item(index='1')
          i.el-icon-close
        el-menu-item(index='2')
          i.el-icon-menu
        el-menu-item(index='3')
          i.el-icon-menu
        el-menu-item(index='4')
          i.el-icon-menu

    el-col(:span='5')
      el-tabs.year-filter(type="border-card")
        el-tab-pane(label="2017")
          .post-list
            .post
              h2.title Wir sind Umgezogen
              span.date 13/03/2017
            .post
              h2.title 20 Jahre Windenergie
              span.date 13/02/2017
            .post
              h2.title Suk ma dieeek
              span.date 18/06/2017
        el-tab-pane(label="2016")
          .post-list
            .post
              h2.title kasjfhksdj
              span.date 13/03/2016
            .post
              h2.title fdsf
              span.date 13/02/2016
            .post
              h2.title sdfsfds
              span.date 18/06/2016
        el-tab-pane(label="2015")
          .post-list
            .post
              h2.title asgsassadgsg
              span.date 13/03/2015
            .post
              h2.title dsfdfgfds dfhdf
              span.date 13/02/2015
            .post
              h2.title hdfhdf dfhsdh hfdh
              span.date 18/06/2015



</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      msg: 'homepage text...'
    }
  }
}
</script>

<style lang="sass" scoped>
  h1
    color: blue
</style>
