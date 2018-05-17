<template>
  <div>
    <vheader title="首页"></vheader>
        <!--index swiper-->
    <div class="swiper-container swiper-container-index">
      <div class="swiper-wrapper" id="swiperVm">
        <div class="swiper-slide" v-for="item in swipers" >
          <img :src="item.src"/>
        </div>
      </div>

      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>

    <cards></cards>
    <more title="直播推荐" icon="static/imgs/play.png"></more>
    <div class="lives">
      <live v-for="item in lives" class="live-item" src="static/imgs/liver.png" :title="item.title" :num="item.num" :liver="item.host" :key="item.id"></live>
    </div>
    <more title="培训课程" icon="static/imgs/broadcast.png"></more>
    <div class="cvideos">
      <cvideo v-for="item in videos" :title="item.title" :video="item.src" :watched="item.watched" :key="item.id"></cvideo>

    </div>
    <cfooter></cfooter>
  </div>
</template>

<script>
//import vheader from './../components/Header.vue'
import Swiper from './../../static/swiper.min.js'
require('./../../static/swiper.min.css')

import cards from './../components/Cards.vue'
import more from './../components/More.vue'
import live from './../components/Live.vue'
import cvideo from './../components/Video.vue'
import cfooter from './../components/Footer.vue'

export default {
  name: 'Index',
  props: {

  },
  data () {
    return {
      swipers: [{src: 'static/imgs/banner1.jpg'}, {src: 'static/imgs/banner2.jpg'}, {src: 'static/imgs/banner3.jpg'}, {src: 'static/imgs/banner4.jpg'}],
      lives: [
      {id: '1', title: '发动机密封胶的正确使用流程及装配1345', num: '初级会员 · 153人在线', host: '主讲人：潘德金'},
      {id: '2', title: '发动机密封胶的正确使用流程及装配', num: '初级会员 · 77人在线', host: '主讲人：潘德金'}
      ],
      videos: [
       {
          id: 1, title: '折边密封施工工艺9100的施工步骤', src: "http://www.henkel-vrm.com/vrmTest/loctite/28d3c375-d89b-40e8-beee-13dcbec34611.mp4", watched: 77
       },
       {
          id: 2, title: '折边密封施工工艺9100的施工步骤', src: "http://www.henkel-vrm.com/vrmTest/loctite/28d3c375-d89b-40e8-beee-13dcbec34611.mp4", watched: 77
       } 
      ]
    }
  },
  methods: {
    creatSwiper() {
      var mySwiper = new Swiper('.swiper-container-index', {
        direction: 'horizontal',
        loop: true,        
        pagination: '.swiper-pagination',
        autoplay : 5000
      });
    }
  },
  created () {
    setTimeout(() => {
      this.creatSwiper();
    },300)
  },
  components: {
    //vheader: vheader,
    cards: cards,
    more: more,
    live: live,
    cvideo: cvideo,
    cfooter: cfooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index {
    height: 100%;
    width: 100%;
  }
  .swiper-container-index {
    margin-top: 45px;
    width: 100%;
    height: 115px;
  }
  .swiper-container-index img {
    width: 100%;
  }
  .lives .live-item:last-child {
    padding-bottom: 0;
  }
  .cvideos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 70px;
  }
</style>

<!--       <video id="u2779_img" class="img"/>
        <source src="http://www.henkel-vrm.com/vrmTest/loctite/28d3c375-d89b-40e8-beee-13dcbec34611.mp4" type="video/mp4">
      </video> -->