<template>
  <div>
    <vheader title="热门话题" :showBack="true" :showHot="true" :showAdd="true"></vheader>
    <div class="hotTopicItem">
<!--     	<a href="/discuss_detail"> -->
      <div @click="toHotTopicDetail">
    		<hotTopicItem title="来看我的漆面怎么回事？"></hotTopicItem>
      </div>
<!--     	</a> -->
    </div>
    <cfooter></cfooter>
  </div>
</template>

<script>
import vheader from './../components/Header.vue'
import hotTopicItem from './../components/HotTopicItem.vue'
import cfooter from './../components/Footer.vue'

export default {
  name: 'HotTopic',
  props: {

  },
  data() {
    return {
      //showBack: true,
      //showHot: true,
      //showAdd: true
    }
  },
  methods: {
    toHotTopicDetail() {
      this.$router.push({ path : '/discuss_detail' })
    }
  },
  components: {
  	vheader: vheader,
  	hotTopicItem: hotTopicItem,
  	cfooter: cfooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hotTopicItem {
	margin: 50px 0;
	padding: 0 20px;
}

.hotTopicItem a {
	text-decoration: none;
}

</style>
