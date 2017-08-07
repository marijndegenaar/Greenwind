<template>
  <aside class="sidebar menu columns">
    <div class="column is-2">
      <ul class="menu-list">
        <li><a>❌</a></li>
        <li><a>✳️</a></li>
        <li><a>🚾</a></li>
        <li><a>🈁</a></li>
      </ul>
    </div>
    <div class="column">
      <div class="tabs is-boxed is-fullwidth is-small">
        <ul>
          <li><a>2017</a></li>
          <li><a>2016</a></li>
          <li><a>2015</a></li>
        </ul>
      </div>
      <div class="menu">
        <ul class="menu-list">
          <li>
            <h3 class="title">Post 1 lorum osiofisdof</h3>
            <span class="date">23/07/2017</span>
          </li>
          <li>
            <h3 class="title">Post 2</h3>
            <span class="date">20/04/2017</span>
          </li>
          <li>
            <h3 class="title">Post 3</h3>
            <span class="date">12/03/2017</span>
          </li>
        </ul>
      </div>
    </div>
  </aside>
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
