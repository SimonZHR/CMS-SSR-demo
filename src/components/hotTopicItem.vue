<template>
  <div class="item-line">
    <div class="title">{{title}}</div>
    <p><span>{{viewNum}}浏览&nbsp; {{commentNum}}评论</span>
      <img class="img-fire" src="static/imgs/hot.png">
      <img class="img-fire" src="static/imgs/carfix.png">
    </p>
  </div>
</template>

<script>
export default {
  name: 'More',
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    viewNum: {
      type: String,
      default: '0'
    },
    commentNum: {
      type: String,
      default: '0'
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item-line {
    border-top: solid 1px #e6e6e6;
    position: relative;  
  }

  .title {
    font-size: 14px;
    color: #666666;
    padding-top: 10px;
  }
  .item-line p {
    font-size: 10px;
    color: #999999;
  }
  .item-line:last-child {
    border-bottom: solid 1px #e6e6e6;
  }
  .return {
    left: -20px;
    color: red;
    position: absolute;
  }
  .img-fire {
    width: 15px;
    height: 15px;
    display: inline-block;
  }
</style>
