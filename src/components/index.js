import Layouthead from './home/layout_head'
import Layoutaside from './home/layout_aside'
import BreadCrumb from './common/bread-crumb.vue' // 引入面包屑
import VueQuillEditor from 'vue-quill-editor' // 引入富文本编辑器
import Coverimage from './publish/cover_img' // 引入封面组件
import Selectimage from './publish/select_img' // 封面组件中的搜索图片组件
// 富文本编辑器必须引入的文档
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// -------------------
export default {
  install: function (Vue) {
    Vue.component('layout-head', Layouthead)
    Vue.component('layout-aside', Layoutaside)
    Vue.component('bread-crumb', BreadCrumb)
    Vue.use(VueQuillEditor) // 注册富文本编辑器
    Vue.component('cover-image', Coverimage)
    Vue.component('select-image', Selectimage)
  }
}
