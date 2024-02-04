import type { RouteRecordRaw } from 'vue-router'

//小仓库state的类型

export interface UserState {
  token: string | null
  constantRoutes: RouteRecordRaw[]
}
