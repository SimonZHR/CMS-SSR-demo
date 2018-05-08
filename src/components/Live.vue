<template>
    <div class="live" @click="toVideoDetail">
      <img v-bind:src="src">
      <div class="title">{{title}}</div>
      <div class="num">{{num}}</div>
      <div class="name">{{liver}}</div>
    </div>
</template>

<script>
export default {
  name: 'Live',
  props: {
    src: {
      type: String,
      //default: '',
      required: true
    },
    title: {
      type: String,
      default: '无',
      required: true
    },
    num: {
      type: String,
      default: '0人在线',
      required: true
    },
    liver: {
      type: String,
      default: '无'
    }
  },
  methods: {
    toVideoDetail() {
      this.$router.push({path: '/hot_video_detail'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .live {
    padding: 0 20px 20px 130px;
    position: relative;
    font-size: 12px;
    color: #666;
  }

  .live img {
    position: absolute;
    top: 0;
    left: 20px;
    height: 60px;
    width: 95px;
    border-radius: 7px;
  }

  .live div {
    line-height: 19px;
  }

  .live .num {
    color: #999;
  }

</style>
