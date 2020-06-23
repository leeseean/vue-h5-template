// 请求接口
import {getUserInfo} from '@/api/user.js'
import BScroll from 'better-scroll'
import VFooter from '../../components/footer/Footer.vue'
export default {
  components: {VFooter},

  data() {
    return {
      playerOptions: {
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: 'video/mp4',
            src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
          }
        ]
        // poster: '/static/images/author.jpg'
      },
      moreVideoData: [
        {
          id: 0,
          src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
          text: '怎么治疗湿疹'
        },
        {
          id: 1,
          src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
          text: '怎么治疗湿疹'
        },
        {
          id: 2,
          src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
          text: '怎么治疗湿疹'
        },
        {
          id: 3,
          src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
          text: '怎么治疗湿疹'
        },
        {
          id: 4,
          src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
          text: '怎么治疗湿疹'
        },
        {
          id: 5,
          src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
          text: '怎么治疗湿疹'
        },
        {
          id: 6,
          src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
          text: '怎么治疗湿疹'
        },
        {
          id: 7,
          src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
          text: '怎么治疗湿疹'
        }
      ],
      articlesData: [1, 2, 3, 4, 5, 6],
      btnStausObj: {
        help: false,
        star: false,
        shared: false
      }
    }
  },

  computed: {},

  mounted() {
    this.initData()
    this.initVideosScroll()
  },
  metaInfo() {
    return {
      title: '腾讯医典'
    }
  },
  methods: {
    initVideosScroll() {
      this.$nextTick(() => {
        console.log(this.$refs.videoListRef.width, this.$refs.videoListRef.scrollWidth)
        this.$refs.videoListRef.style.width = this.$refs.videoListRef.scrollWidth + 'px'
        this.videosScroll = new BScroll(this.$refs.moreVideosRef, {
          scrollX: true,
          scrollY: false
        })
      })
    },
    initPlayData(src) {
      return {
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            src,
            type: 'video/mp4'
          }
        ]
        // poster: '/static/images/author.jpg'
      }
    },
    // 请求数据案例
    initData() {
      // 请求接口数据，仅作为展示，需要配置src->config下环境文件
      getUserInfo()
        .then(() => {})
        .catch(() => {})
    },
    loadmore() {
      this.articlesData.push(Date.now())
    }
  }
}
