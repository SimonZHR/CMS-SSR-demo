<template>
  <div class="container">
    <vheader :showBack="showBack"></vheader>
    <div class="type">
      [车身维修]
    </div>
    <p>来看我的漆面怎么回事？
    </p>
    <div class="info">
      <img src="static/imgs/mine.png">
      <span>张三</span>
      <p class="date">2018.2.15  150浏览</p>
    </div>
    <p class="title">来看我的漆面怎么回事？</p>
    <div class="comment">
      <input placeholder="发表评论..."></input>
      <button>提交</button>
    </div>
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
      showBack: true
    }
  },
  methods: {
    
  },
  components: {
  	vheader: vheader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    padding: 45px 20px;
    font-size: 14px;
    color: #666;
  }
  .type {
    font-weight: 700;
    line-height: 35px;
    border-bottom: solid 1px #666;
    text-align: center;
  }
  .info {
    padding: 0 0 20px 45px;
    position: relative;
  }
  .info img {
    position: absolute;
    height: 35px;
    width: 35px;
    left: 0;
    top: 0;
  }
  .info .date {
    font-size: 10px;
    color: #999;
    margin: 0;
  }
  .title {
    font-size: 16px;
    font-weight: 700;
    color: #000;
  }
  .comment {
    height: 35px;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: solid 1px #e6e6e6;
    padding: 10px 20px;
  }
  .comment input {
    border: solid 1px #e6e6e6;
    width: 65%;
    height: 100%;
    color: #999;
    padding-left: 10px;
  }
  .comment button {
    width: 68px;
    height: 38px;
    border-radius: 5px;
    color: #fff;
    background-color: #e22426;
    float: right;
    margin-right: 30px;
    border: 0;
  }
</style>
