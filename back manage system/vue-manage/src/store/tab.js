export default {
  state: {
    isCollapse: false,
    tabList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ],
    currentMenu: null
  },
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    selectMenu(state, value) {
      if (value.name !== 'home'){
        state.currentMenu = value
        const result = state.tabList.findIndex(item => item.name === value.name)
        if(result === -1) {
          state.tabList.push(value)
        }
      } else {
        state.currentMenu = null
      }
    }
  }
}