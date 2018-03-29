<template>
  <div>
    <header>
      <router-link to="/common/home">home</router-link>
      <router-link to="/common/cultivate">cultivate</router-link>
      <router-link to="/common/through">through</router-link>
    </header>
    <div>this common</div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import cultivatescene from './cultivatescene'
import homescene from './homescene'
import throughscene from './throughscene'
export default {
  data () {
    return {}
  },
  components: {
    cultivatescene,
    homescene,
    throughscene
  },
  created () {

  },
  mounted () {

  },
  computed: {},
  methods: {}
}
</script>
<style lang="stylus" scoped>

</style>
