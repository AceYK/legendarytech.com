import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './store'

Vue.config.productionTip = false

let isDescendant = (parent, child) => {
  let node = child.parentNode

  while (node !== null) {
    if (node === parent) {
      return true
    }

    node = node.parentNode
  }

  return false
}

window.disablescroll = function (e) {
  const overflows = document.querySelectorAll('.overflow-auto')

  for (let i = 0; i < overflows.length; i++) {
    if (isDescendant(overflows[i], e.target)) {
      return
    }
  }

  e.preventDefault()
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
