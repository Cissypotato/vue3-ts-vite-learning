import type { App } from 'vue'

import SvgIcon from '@/components/SvgIcon.vue'
import Table from '@/components/Table.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const globalComponents = { SvgIcon, Table }

export default {
  install(app: App) {
    Object.keys(globalComponents).forEach((key) => {
      app.component(key, globalComponents[key])
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
