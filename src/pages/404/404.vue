<template>
  <view class="page">
    <h1>迷路啦，找不到页面</h1>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  onLoad(...options) {
    console.log(options)
    console.log(this.$Route)
  },
  methods: {},
}
</script>

<style lang="scss">
.page {
  display: flex;
  flex: 1;
  height: 100vh;
  background: $uni-bg-color-grey;
  justify-content: center;
  align-items: center;
}
</style>
