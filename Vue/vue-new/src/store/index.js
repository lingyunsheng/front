import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    obj: {
      name: 'lingyunsheng'
    }
  },
  mutations: {
    setObj(state, value) {
      state.obj.name = value
    }
  },
  actions: {
  },
  modules: {
  }
});
