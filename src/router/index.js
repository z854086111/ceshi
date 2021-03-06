import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home.vue'
import FirstPage from '@/components/FirstPage.vue'
import SecondPage from '@/components/SecondPage.vue'
import page3 from '@/components/page3.vue'
import page4 from '@/components/page4.vue'
import page5 from '@/components/page5.vue'
import page6 from '@/components/page6.vue'
import form from '@/components/form.vue'
import form2 from '@/components/form2.vue'
import form3 from '@/components/form3.vue'
import form4 from '@/components/form4.vue'
import page7 from '@/components/page7.vue'
import page8 from '@/components/page8.vue'
import alert from '@/components/alert.vue'
import load from '@/components/load.vue'
import message from '@/components/message.vue'
import MessageBox from '@/components/MessageBox.vue'
import Notification from '@/components/Notification.vue'
import Tabs from '@/components/Tabs.vue'
import tag from '@/components/tag.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Dropdown from '@/components/Dropdown.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/FirstPage',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/SecondPage',
      name: 'SecondPage',
      component: SecondPage
    },
    {
      path: '/page3',
      name: 'page3',
      component: page3
    },
    {
      path: '/page4',
      name: 'page4',
      component: page4
    },
    {
      path: '/page5',
      name: 'page5',
      component: page5
    },
    {
      path: '/page6',
      name: 'page6',
      component: page6
    },
    {
      path: '/form',
      name: 'form',
      component: form
    },
    {
      path: '/form2',
      name: 'form2',
      component: form2
    },
    {
      path: '/form3',
      name: 'form3',
      component: form3
    },
    {
      path: '/form4',
      name: 'form4',
      component: form4
    },
    {
      path: '/page7',
      name: 'page7',
      component: page7
    },
    {
      path: '/page8',
      name: 'page8',
      component: page8
    },
    {
      path: '/alert',
      name: 'alert',
      component: alert
    },
    {
      path: '/load',
      name: 'load',
      component: load
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/MessageBox',
      name: 'MessageBox',
      component: MessageBox
    },
    {
      path: '/Notification',
      name: 'Notification',
      component: Notification
    },
    {
      path: '/Tabs',
      name: 'Tabs',
      component: Tabs
    },
    {
      path: '/tag',
      name: 'tag',
      component: tag
    },
    {
      path: '/Breadcrumb',
      name: 'Breadcrumb',
      component: Breadcrumb
    },
    {
      path: '/Dropdown',
      name: 'Dropdown',
      component: Dropdown
    }
  ]
})
