<template>
    <div class="video">
      <div class="video-item">
        <video class="item">
          <source v-bind:src="video" type="video/mp4">
        </video>
        <div class="num">
          <img src="static/imgs/triangle.png">
          <span>{{watched}}</span>
        </div>
      </div>
      <p class="title">
        {{title}}
      </p>
    </div>
</template>

<script>
export default {
  name: 'Video',
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    video: {
      type: String,
      required: true
    },
    watched: {
      type: String,
      default: 0
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .video {
    width: 42%;
    margin: 0 2%;
    padding: 0 2%;
    font-size: 0;
    display: flex;
    flex-direction: column;
  }

  .video .video-item {
    position: relative;
  }

  .video .title {
    line-height: 15px;
    font-size: 12px;
    margin-top: 5px;
  }

  .video-item .item {
    height: 100%;
    width: 100%;
    border-radius: 7px;
  }
  .video-item .num {
    position: absolute;
    bottom: 2px;
    left: 7px;
    z-index: 999;
  }
  .video-item .num img {
    height: 7px;
    width: 7px;
    display: inline-block;
    margin-right: 3px;
    transform: rotate(90deg);
  }
  .video-item .num span {
    color: white;
    font-size: 12px;
  }

</style>
