import router from '@/router'
import progress from 'nprogress' // 进度条包
import 'nprogress/nprogress.css' // 样式文件
// 设置token权限
router.beforeEach(function (to, from, next) {
  // 开启进度条
  progress.start()
  if (to.path.startsWith('/home')) { // 如果去主页
    const token = window.localStorage.getItem('user_token')
    if (token) { // 去主页判断有没有token,有就通过，没有就去login
      next()
    } else {
      next('/login')
    }
  } else { // 如果不去主页通过
    next()
  }
})

router.afterEach(() => {
  progress.done() // 关闭进度条
})
