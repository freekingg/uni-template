<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view>
      <text class="title">{{ title }}</text>
    </view>
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
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
