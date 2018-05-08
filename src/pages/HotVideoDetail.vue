<template>
  <div class="container">
    <vheader title="折边密封施工工艺" :showBack="showBack"></vheader>
    <video class="video" controls autoplay name="media">
      <source src="http://www.henkel-vrm.com/vrmTest/loctite/28d3c375-d89b-40e8-beee-13dcbec34611.mp4" type="video/mp4">
    </video>
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
    padding: 45px 0 0 0;
    font-size: 14px;
    color: #666;
  }
  .video {
    height: 100%;
    width: 100%;
  }
</style>
