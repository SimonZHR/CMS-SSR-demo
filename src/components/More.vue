<template>
    <div class="more">
      <img v-bind:src="icon">
      <span class="title">{{title}}</span>
      <span class="to">更多</span>
      <i></i>
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
    icon: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .more {
    padding: 10px 20px 0 20px;
    line-height: 50px;
    color: #666;
    display: flex;
    align-items: center;
  }

  .more img {
    height: 22px;
    width: 22px;
    display: inline-block;
  }

  .more .title {
    font-size: 14px;
    padding-left: 5px;
    font-weight: 700;
  }

  .more .to {
    font-size: 12px;
    position: absolute;
    right: 30px;
  }

  .more i {
    height: 7px;
    width: 7px;
    border-top: solid 1px #666;
    border-right: solid 1px #666;
    transform: rotate(45deg);
    position: absolute;
    right: 20px;
  }
</style>
