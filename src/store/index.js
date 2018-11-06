import Vue from 'vue'
import Vuex from 'vuex'

// we first import the module
import userdata from './userdata'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    // then we reference it
    userdata
  }
})

// if we want some HMR magic for it, we handle
// the hot update like below. Notice we guard this
// code with "process.env.DEV" -- so this doesn't
// get into our production build (and it shouldn't).
if (process.env.DEV && module.hot) {
  module.hot.accept(['./userdata'], () => {
    const newUserdata = require('./userdata').default
    store.hotUpdate({ modules: { userdata: newUserdata } })
  })
}

export default store
