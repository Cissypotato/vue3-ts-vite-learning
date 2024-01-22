import type { App } from 'vue'

import SvgIcon from '@/components/SvgIcon.vue'
import Table from '@/components/Table.vue'

const globalComponents = { SvgIcon, Table }

export default {
  install(app: App) {
    Object.keys(globalComponents).forEach((key) => {
      app.component(key, globalComponents[key])
    })
  },
}
