<template>
  <view class="content">
    <u-cell-item icon="setting-fill" title="个人设置"></u-cell-item>
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
