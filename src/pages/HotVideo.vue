<template>
  <div>
    <vheader title="热门视频" :showBack="true"></vheader>
    <img src="static/imgs/video-banner.jpg" class="banner">
    <div class="lives">
      <live class="live-item" src="static/imgs/liver.png" title="发动机密封胶的正确使用流程及装配1345" num="初级会员 · 153人在线" liver="主讲人：潘德金"></live>
      <live class="live-item" src="static/imgs/liver.png" title="发动机密封胶的正确使用流程及装配1345" num="初级会员 · 153人在线" liver="主讲人：潘德金"></live>
    </div>
    <cfooter></cfooter>
  </div>
</template>

<script>
import vheader from './../components/Header.vue'
import cfooter from './../components/Footer.vue'
import live from './../components/Live.vue'

export default {
  name: 'HotVideo',
  props: {

  },
  data () {
    return {
      //showBack: true
    }
  },
  methods: {

  },
  components: {
  	vheader: vheader,
  	cfooter: cfooter,
    live: live
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .banner {
    padding-top: 45px;
    padding-bottom: 15px;
    width: 100%;
    height: 150px;
  }
  .cvideos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 70px;
  }
  .lives .live-item:last-child {
    padding-bottom: 0;
  }

</style>
