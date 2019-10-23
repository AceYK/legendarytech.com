import Vue from 'vue'

const store = new Vue({
  data: {
  },
  methods: {
  }
})

Object.defineProperties(Vue.prototype, {
  $STORE: {
    get () {
      return store
    }
  }
})

window.$STORE = store

export default store
