import Layouthead from './home/layout_head'
import Layoutaside from './home/layout_aside'
export default {
  install: function (Vue) {
    Vue.component('layout-head', Layouthead)
    Vue.component('layout-aside', Layoutaside)
  }
}
