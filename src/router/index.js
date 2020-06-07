// 导入vue
import Vue from 'vue'
// 导入路由插件
import Router from 'vue-router'
// 导入上面定义的组件
import Content from '../components/Content'
import HelloWorld from "../components/HelloWorld";

// 安装路由
Vue.use(Router);

// 配置路由
export default new Router({
  routes: [
    {
      // 路由路径
      path: '/content',
      // 路由名称
      name: 'Content',
      // 跳转到组件
      component: Content
    },
    {
      // 路由路径
      path: '/helloworld',
      // 路由名称
      name: 'HelloWorld',
      // 跳转到组件
      component: HelloWorld
    }
  ]
});
