import type { App, VNode } from "vue";
import Loading from "./index.vue";
import { createVNode, render } from "vue";

export default {
  install(app: App) {
    //vue规定的必须的install函数
    const vNode: VNode = createVNode(Loading); //将组件转换为VNode
    //用render函数将自定义的插件挂载到dom上
    render(vNode, document.body);
    // console.log("Loading", vNode.component);
    // console.log("app", app);
    app.config.globalProperties.$CCLoading = {
      show: vNode.component?.exposed?.show,
      hide: vNode.component?.exposed?.hide,
    };
  },
};
