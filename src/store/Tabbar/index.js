

const state = {
    tabbarName:'home'
}
const mutations = {
    SETTABBER(state,tabName){
        state.tabbarName = tabName
    }
}
const actions = {

  
}
const getters = {}

export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters
}