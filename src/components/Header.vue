<template>
  <div class="header">
    <div class="header-container">
      {{title}}
      <span v-if="showBack" class="arrow"></span>
      <span v-if="showBack" @click="goBack" class="return">返回</span>
      <img v-if="showHot" src="static/imgs/hot.png">
      <img class="add" v-if="showAdd" src="static/imgs/add.png" @click="addTopic">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: '',
    },
    showBack: {
      type: Boolean,
      default: false
    },
    showHot: {
      type: Boolean,
      default: false
    },
    showAdd: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goBack () {
      window.history.go(-1)
    },
    addTopic() {
      this.$router.push({path: '/add_topic'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    height: 45px;
    width: 100%;
    background-color: rgba(242, 242, 242, 1);
    line-height: 45px;
    text-align: center;
  }

  .header-container {
    position: relative;
    color: #666;
    font-size: 14px;
  }
  .header-container .arrow {
    position: absolute;
    left: 20px;
    height: 6px;
    width: 6px;
    border-top: solid 3px #e22426;
    border-right: solid 3px #e22426;
    top: 19px;
    transform: rotate(-135deg);
  }
  .header-container .return {
    position: absolute;
    left: 32px;
    color: #e22426;
  }
  .header-container img {
    width: 15px;
    height: 15px;
    display: inline-block;
  }
  .header-container .add {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 20px;
    top: 13px;
  }
</style>
