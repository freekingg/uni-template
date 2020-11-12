<script>
export default {
  onLaunch: function() {
    console.log('App Launch')
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  },
  // 捕获 app error
  onError(err) {
    console.log(err)
  },
}
</script>

<style>
/*每个页面公共css */
</style>
