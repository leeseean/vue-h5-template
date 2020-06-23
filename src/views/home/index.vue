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
        <div class="vpm-videos-list" ref="videoListRef">
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
      <div class="vpa-list">
        <div class="vpa-videos-item" v-for="item in articlesData" :key="item">
          <div class="vvi-left">
            <div class="vvi-left-title">冠心病常用的六类药，有什么作用和副作用？</div>
            <div class="vvi-left-author">
              <span class="vla-left">腾讯医典</span>
              <span class="vla-right">医学编辑组</span>
            </div>
          </div>
          <div class="vvi-right">
            <img src="../../assets/images/articel-img2.png" />
          </div>
        </div>
      </div>
      <div class="vpa-more">
        <span></span>
        <span class="vpa-more-text" @click="loadmore">
          查看更多
          <span class="vpa-more-icon"></span>
        </span>
        <span></span>
      </div>
    </div>
    <v-footer />
    <div class="video-page-btns">
      <div class="vpb-help" @click="btnStausObj.help = !btnStausObj.help">
        <div class="vpb-help-icon" :class="{active: btnStausObj.help}"></div>
        <div class="vpb-help-text">有帮助</div>
      </div>
      <div class="vpb-store" @click="btnStausObj.star = !btnStausObj.star">
        <div class="vpb-store-icon" :class="{active: btnStausObj.star}"></div>
        <div class="vpb-store-text">收藏</div>
      </div>
      <div class="vpb-share">
        <div class="vpb-share-icon"></div>
        <div class="vpb-share-text">分享</div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="less" src="./index.less" scoped></style>
