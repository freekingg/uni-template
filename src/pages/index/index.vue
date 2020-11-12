<template>
  <view class="content">
    <u-grid :col="3">
      <u-grid-item>
        <u-icon name="photo" :size="46"></u-icon>
        <view class="grid-text">图片</view>
      </u-grid-item>
      <u-grid-item>
        <u-icon name="lock" :size="46"></u-icon>
        <view class="grid-text">锁头</view>
      </u-grid-item>
      <u-grid-item>
        <u-icon name="hourglass" :size="46"></u-icon>
        <view class="grid-text">沙漏</view>
      </u-grid-item>
    </u-grid>
  </view>
</template>

<script>
import { mapActions } from 'vuex'
import Book from '@/model/book'
export default {
  data() {
    return {
      title: 'Hello',
    }
  },
  onLoad() {
    let s = 'sfds'
  },
  methods: {
    ...mapActions(['loginOut']),
  },
}
</script>

<style>
</style>
