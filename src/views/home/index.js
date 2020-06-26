// 请求接口
import {getUserInfo} from '@/api/user.js'
import VFooter from '../../components/footer/Footer.vue'
export default {
  components: {VFooter},

  data() {
    return {

    }
  },

  computed: {},

  mounted() {
    this.initData()
  },
  metaInfo() {
    return {
      title: '腾讯医典'
    }
  },
  methods: {
    // 请求数据案例
    initData() {
      // 请求接口数据，仅作为展示，需要配置src->config下环境文件
      getUserInfo()
        .then(() => {})
        .catch(() => {})
    }
  }
}
