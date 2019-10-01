import Vue from 'vue'
import Router from 'vue-router'
import Myprofile from '@/components/Myprofile'
import School from '@/components/School' //①import
import Dream from '@/components/Dream'
import Strength from "@/components/Strength"
import Weakness from "@/components/Weakness"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myprofile',
      component: Myprofile
    },

//②profile
   {
      path: '/school',
      name: 'School',
      component: School
    },
     {
      path: '/dream',
      name: 'dream',
      component: Dream
    },
     {
      path: '/strength',
      name: 'Strength',
      component: Strength
    },
     {
      path: '/weakness',
      name: 'Weakness',
      component: Weakness
    }
  ]
})

