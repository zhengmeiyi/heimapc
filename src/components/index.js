import Layouthead from './home/layout_head'
import Layoutaside from './home/layout_aside'
import BreadCrumb from './common/bread-crumb.vue'
export default {
  install: function (Vue) {
    Vue.component('layout-head', Layouthead)
    Vue.component('layout-aside', Layoutaside)
    Vue.component('bread-crumb', BreadCrumb)
  }
}
