import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import HotTopic from '@/pages/HotTopic'
import HotTopicDetail from '@/pages/HotTopicDetail'
import HotVideo from '@/pages/HotVideo'
import HotVideoDetail from '@/pages/HotVideoDetail'
import AddTopic from '@/pages/AddTopic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/hot_topic',
      name: 'HotTopic',
      component: HotTopic
    },
    {
      path: '/discuss_detail',
      name: 'HotTopicDetail',
      component: HotTopicDetail
    },
    {
      path: '/hot_video',
      name: 'HotVideo',
      component: HotVideo
    },
    {
      path: '/hot_video_detail',
      name: 'HotVideoDetail',
      component: HotVideoDetail
    },
    {
      path: '/add_topic',
      name: 'AddTopic',
      component: AddTopic
    }
  ]
})
