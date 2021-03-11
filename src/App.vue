<script>
import { checkUpdate } from './common/utils/update'
import Utils from './common/utils/util'

export default {
  async onLaunch() {
    console.log('App Launch')
    // #ifdef APP-PLUS
    const isUpdate = await checkUpdate()
    console.log('isUpdate', isUpdate)
    // #endif
  },
  onShow() {
    console.log('App Show')
    Utils.checkNetwork()
  },
  onHide() {
    console.log('App Hide')
  },
  // 捕获 app error
  // onError(err) {
  // console.log(err)
  // },
}
</script>

<style lang="scss">
@import 'uview-ui/index.scss';
</style>
