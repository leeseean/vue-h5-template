<!-- home -->
<template>
  <div class="video-page-container">
    <div class="video-page-video">
      <video-player class="video-player-box" ref="myPlayer" :options="playerOptions"></video-player>
    </div>
    <div class="video-page-news">
      <h2 class="vpn-title">原来产后抑郁症和产后情绪低落的区别在这里！</h2>
      <div class="vpn-author">
        <span class="vpn-author-name">HealthWise</span>
        <span class="vpn-author-role">美国著名的健康信息服务商</span>
      </div>
      <div class="vpn-date">
        <span class="vpn-date-left">更新于</span>
        <span class="vpn-date-right">2019-09-09</span>
      </div>
      <div class="vpn-content">
        <div class="vpn-content-title">视频简介</div>
        <div
          class="vpn-content-detail"
        >抑郁症是女性最高发的心理疾病。目前全球范围内每年新发乳腺癌达 168 万人，每年有 52 万女性因乳腺癌而死亡。科学地进行乳房检查有利于尽早发现乳腺疾病现乳腺…</div>
      </div>
    </div>
    <div class="video-page-more">
      <div class="vpm-title">相关视频</div>
      <div class="vpm-videos" ref="moreVideosRef">
        <div class="vpm-videos-list">
          <div class="vpm-videos-item" v-for="(item, index) in moreVideoData" :key="item.id">
            <div class="vvi-video">
              <video-player class="video-player-box" :options="initPlayData(item.src)"></video-player>
            </div>
            <div class="vvi-text" :index="index">{{item.text}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="video-page-articles">
      <div class="vpa-title">相关文章</div>
      <div class="vpa-videos">
        <div class="vpa-videos-item">
          <div></div>
          <div>怎么治疗湿疹</div>
        </div>
      </div>
      <div class="vpa-more">
        <span class="vpa-more-text">查看更多</span>
        <span class="vpa-more-icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
// 请求接口
import {getUserInfo} from '@/api/user.js'
import BScroll from 'better-scroll'
export default {
  components: {},

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
      ]
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
        this.videosScroll = new Bscroll(this.$refs.moreVideosRef, {
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
    onChange(index) {
      if (index === 1) window.location.href = 'https://github.com/sunnie1992/vue-h5-template'
    }
  }
}
</script>
<style lang="less" scoped>
.video-page-container {
  background: #f7fafa;
  .video-page-video {
    /deep/ .video-js {
      height: 420px;
      width: 100%;
      .vjs-big-play-button {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: none;
        background-color: transparent;
        .vjs-icon-placeholder::before {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          content: '';
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-image: url(../../assets/images/play-btn.png);
          @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
            background-image: url(../../assets/images/play-btn@3x.png);
          }
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
    }
  }
  .video-page-news {
    background: #ffffff;
    padding: 36px 48px;
    .vpn-title {
      font-weight: bold;
      font-size: 48px;
      color: rgba(0, 0, 0, 0.85);
      letter-spacing: 0;
    }
    .vpn-author {
      margin-top: 24px;
      .vpn-author-name {
        margin-right: 16px;
        font-size: 24px;
        color: rgba(0, 0, 0, 0.85);
        letter-spacing: 0;
      }
      .vpn-author-role {
        font-size: 24px;
        color: rgba(0, 0, 0, 0.65);
        letter-spacing: 0;
      }
    }
    .vpn-date {
      margin-top: 8px;
      font-size: 24px;
      color: rgba(0, 0, 0, 0.25);
      letter-spacing: 0;
      .vpn-date-left {
        margin-right: 12px;
      }
    }
    .vpn-content {
      margin-top: 88px;
      text-align: left;
      .vpn-content-title {
        margin-bottom: 23px;
        font-size: 36px;
        color: rgba(0, 0, 0, 0.85);
        letter-spacing: 0;
        font-weight: bold;
      }
      .vpn-content-detail {
        font-size: 34px;
        color: rgba(0, 0, 0, 0.65);
        letter-spacing: 0;
        text-align: justify;
        line-height: 58px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    }
  }
  .video-page-more {
    margin-top: 18px;
    background: #ffffff;
    padding: 47px 48px 40px 48px;
    .vpm-title {
      margin-bottom: 23px;
      font-size: 36px;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.85);
      letter-spacing: 0;
    }
    .vpm-videos {
      overflow: hidden;
      white-space: nowrap;
      .vpm-videos-list {
        display: flex;
      }
      .vpm-videos-item {
        flex-shrink: 0;
        margin-right: 24px;
        &:last-child {
          margin-right: 0;
        }
        /deep/ .video-js {
          height: 175px;
          width: 315px;
          border-radius: 12px;
          overflow: hidden;
          background: transparent;
          .vjs-big-play-button {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border: none;
            background-color: transparent;
            .vjs-icon-placeholder::before {
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              content: '';
              width: 48px;
              height: 48px;
              border-radius: 50%;
              background-image: url(../../assets/images/play-btn.png);
              @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
                background-image: url(../../assets/images/play-btn@3x.png);
              }
              background-size: contain;
              background-repeat: no-repeat;
            }
          }
        }
      }
    }
  }
}
</style>
