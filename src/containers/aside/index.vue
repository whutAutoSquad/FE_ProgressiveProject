<template>
  <section class="aside">
  	{{msg}}
  </section>
</template>

<script>
export default {
  data () {
    return {
      msg: 'This area will show some scoped infomation.'
    }
  }
}
</script>

<style scoped>
.aside {
  padding: 20px 0 20px 15px;
}
</style>
