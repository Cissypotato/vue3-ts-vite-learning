import { defineStore } from 'pinia'

import { login } from '@/api/user'
import type { LoginForm, LoginResponse } from '@/api/user/type'
import type { UserState } from './types'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'

import { constantRoute } from '@/router/route'

//创建小仓库
const useUserStore = defineStore('user', {
  state: (): UserState => {
    return { token: GET_TOKEN(), constantRoutes: constantRoute }
  },
  //异步|处理逻辑的地方
  actions: {
    async getLogin(form: LoginForm) {
      const result: LoginResponse = await login(form)

      if (result.code === 200) {
        SET_TOKEN(result.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(result.data.message)
      }
    },
  },
  getters: {},
})

export default useUserStore
