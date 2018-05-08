<template>
    <div>
      <div class="cards">
         <div class="card" @click="tohottopic">
            <img class="bg" src="static/imgs/hottopic.png">
            <span>热门话题</span>
         </div> 
         <div class="card" @click="tohotvideo">
            <img class="bg" src="static/imgs/videobg.png">
            <img class="icon" src="static/imgs/video.png">           
            <span>热门视频</span>
         </div>
          <div class="card">
            <img class="bg" src="static/imgs/productbg.png">
            <img class="icon" src="static/imgs/product.png">
            <span>热门产品</span>
         </div> 
      </div>

      <div class="cards">
         <div class="card">
            <img class="bg" src="static/imgs/repair.png">
            <span>机械维修</span>
         </div> 
         <div class="card">
            <img class="bg" src="static/imgs/maintain.png">       
            <span>汽车保养</span>
         </div>
          <div class="card">
            <img class="bg" src="static/imgs/carfix.png">
            <span>汽车维修</span>
         </div> 
      </div>

    </div>
</template>

<script>
export default {
  name: 'Cards',
  props: {

  },
  methods: {
    tohottopic() {
      this.$router.push({ path : '/hot_topic' })
    },
    tohotvideo() {
      this.$router.push({ path : '/hot_video' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cards {
    display: flex;
    padding: 20px 40px 0 40px;
    justify-content: center;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
  }
  .card .bg {
    height: 40px;
    width: 40px;
    margin-bottom: 10px;
  }
  .card .icon {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 15%;
  }
  .card span {
    font-size: 10px;
    color: #666;
  }
</style>
