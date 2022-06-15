# mall

记录vue2项目实现过程

## 准备工作

1. 划分目录结构
2. 引用两个CSS文件(normalize.css)
3. 引用封装过的公共组件



## 引用封装过的组件

首先将tabbar三个封装的文件复制到项目中

1. 首先将图片资源拷贝
2. 修改文件的引用地址
3. 重新配置router.js
4. router.js配置步骤,引入vue和vue-router,创建Vue.use(),创建vue-router实例,导出,挂载到Vue实例
5. 创建tabbar点击跳转的页面路由组件,并配置路由
