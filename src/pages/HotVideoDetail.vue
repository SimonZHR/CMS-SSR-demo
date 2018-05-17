<template>
  <div class="container">
    <vheader title="折边密封施工工艺" :showBack="true"></vheader>
    <video class="video" controls autoplay name="media">
      <source src="http://www.henkel-vrm.com/vrmTest/loctite/28d3c375-d89b-40e8-beee-13dcbec34611.mp4" type="video/mp4">
    </video>
    <div class="switchCard">
      <div :class="[isDetail?'cur':'white']" @click="showDetail">
        内容详情
      </div>
      <div :class="[isTeacher?'cur':'white']" @click="showTeacher">
        老师介绍
      </div>
    </div>
    <transition name="slide-fade">
      <div class="detail" v-if="isDetail">
        <p>折边密封施工工艺</p>
        <p>日期：2018年5月18日</p>
        <p>培训时长：35分钟</p>
      </div>
      <div class="detail" v-if="isTeacher">
          <p>潘德金</p>
          <p>汉高汽车售后服务（VRM）</p>
          <p>高级技术工程师、培训讲师</p>
      </div>
    </transition>
  </div>
</template>

<script>
import vheader from './../components/Header.vue'

export default {
  name: 'HotTopicDetail',
  props: {

  },
  data () {
    return {
      //showBack: true
      isDetail: true,
      isTeacher: false
    }
  },
  methods: {
    showDetail() {
      setTimeout(() => {
        this.isDetail = true
      }, 400)
      this.isTeacher = false
    },
    showTeacher() {
      this.isDetail = false
      setTimeout(() => {
        this.isTeacher = true
      }, 400)
    }
  },
  components: {
  	vheader: vheader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    padding: 45px 0 0 0;
    font-size: 14px;
    color: #666;
  }
  .video {
    height: 100%;
    width: 100%;
  }
  .switchCard {
    display: flex;
    height: 40px;
    justify-content: center;
  }
  .cur {
    background-color: #E22426;
    text-align: center;
    font-size: 14px;
    color: #fff;
    line-height: 40px;
    width: 100%;
  }
  .white {
    background-color: #fff;
    text-align: center;
    font-size: 14px;
    color: #E22426;
    line-height: 40px;
    width: 100%;
  }
  .detail {
    font-size: 12px;
    color: #666;
    text-align: center;
  }
  .detail p:first-child {
    color: #000;
  }
</style>
