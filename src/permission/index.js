import router from '@/router'
// 设置token权限
router.beforeEach(function (to, from, next) {
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
