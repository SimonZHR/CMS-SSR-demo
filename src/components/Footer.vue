<template>
    <div class="footer">
      <div class="item">
        <img v-bind:src="isSelected.index">
        <p v-bind:class="[cur=='0'?'selected':'origin']">首页</p>
      </div>
      <div class="item">
        <img v-bind:src="isSelected.chat">
        <p v-bind:class="[cur=='1'?'selected':'origin']">资料</p>
      </div>
      <div class="item">
        <img v-bind:src="isSelected.heart">
        <p v-bind:class="[cur=='2'?'selected':'origin']">产品</p>
      </div>
      <div class="item">
        <img v-bind:src="isSelected.gear">
        <p v-bind:class="[cur=='3'?'selected':'origin']">我的</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    cur: {
      type: String,
      default: '0'
    }
  },
  computed: {
    isSelected: function () {
      switch(this.cur) {
        case '0':
          return {
          index: 'static/imgs/indexred.png',
          chat: 'static/imgs/chat.png',
          heart: 'static/imgs/heart.png',
          gear: 'static/imgs/gear.png'
        };break;
        case '1': 
          return {
          index: 'static/imgs/index.png',
          chat: 'static/imgs/chatred.png',
          heart: 'static/imgs/heart.png',
          gear: 'static/imgs/gear.png'
        };break;
        case '2': 
          return {
          index: 'static/imgs/index.png',
          chat: 'static/imgs/chat.png',
          heart: 'static/imgs/heartred.png',
          gear: 'static/imgs/gear.png'
        };break;
        case '3': 
          return {
          index: 'static/imgs/index.png',
          chat: 'static/imgs/chat.png',
          heart: 'static/imgs/heart.png',
          gear: 'static/imgs/gearred.png'
        };break;
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer {
    display: flex;
    justify-content: center;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    height: 60px;
    border-top: solid 1px #e6e6e6;
  }
  .footer .item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
  .footer .item a {
    height: 24px;
  }
  .footer .item img {
    height: 24px;
    width: 24px;
  }
  .footer .item p {
    font-size: 12px;
    margin: 3px 0;
  }
  .selected {
    color: #e22426;
  }
  .origin {
    color: #ccc;
  }
</style>
