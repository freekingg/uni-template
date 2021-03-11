<template>
  <view class="login">
    <view class="content">
      <!-- 头部logo -->
      <view class="header">
        <image :src="logoImage"></image>
      </view>
      <!-- 主体表单 -->
      <view class="main">
        <wInput
          v-model="dataForm.phoneData"
          type="text"
          maxlength="11"
          placeholder="用户名/电话"
          :focus="isFocus"
        ></wInput>
        <wInput v-model="dataForm.passData" type="password" maxlength="11" placeholder="密码"></wInput>
      </view>
      <wButton class="wbutton" text="登 录" :rotate="isRotate" @click="startLogin"></wButton>

      <!-- 底部信息 -->
      <view class="footer">
        <navigator url="/pages/user/forget/index" open-type="navigate">找回密码</navigator>
        <text>|</text>
        <navigator url="/pages/user/register/index" open-type="navigate">注册账号</navigator>
      </view>
    </view>
  </view>
</template>

<script>
import { mapActions } from 'vuex'
import User from '@/common/api/user'

import wInput from '../../../components/watch-input/watch-input.vue'
import wButton from '../../../components/watch-button/watch-button.vue'

export default {
  name: 'login',
  data() {
    return {
      loading: false, // 加载动画
      logoImage: '',
      dataForm: {
        username: 'root',
        password: '123456',
      },
      phoneData: '', // 用户/电话
      passData: '', // 密码
      isRotate: false, // 是否加载旋转
      isFocus: true, // 是否聚焦
    }
  },
  components: {
    wInput,
    wButton,
  },
  methods: {
    ...mapActions(['setUserAndState']),
    async login() {
      const { username, password } = this.form
      uni.showLoading({
        title: '登录中',
      })

      try {
        this.loading = true
        await User.getToken(username, password)
        const userInfo = await this.getUserInfo()
        this.setUserAndState(userInfo)
        this.loading = false
        uni.hideLoading()
        uni.reLaunch({
          url: '/pages/index/index',
        })
      } catch (e) {
        this.loading = false
        uni.hideLoading()
        console.log(e)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* 头部 logo */
.header {
  width: 161rpx;
  height: 161rpx;
  box-shadow: 0rpx 0rpx 60rpx 0rpx rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  background-color: #000000;
  margin-top: 128rpx;
  margin-bottom: 72rpx;
  margin-left: auto;
  margin-right: auto;
}
.header image {
  width: 161rpx;
  height: 161rpx;
  border-radius: 50%;
}

/* 主体 */
.main {
  display: flex;
  flex-direction: column;
  padding-left: 70rpx;
  padding-right: 70rpx;
}
.tips {
  color: #999999;
  font-size: 28rpx;
  margin-top: 64rpx;
  margin-left: 48rpx;
}

/* 登录按钮 */
.wbutton {
  margin-top: 96rpx;
}

/* 底部 */
.footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 28rpx;
  margin-top: 64rpx;
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
  height: 40rpx;
  line-height: 40rpx;
}
.footer text {
  font-size: 24rpx;
  margin-left: 15rpx;
  margin-right: 15rpx;
}
</style>
