import request from '@/utils/request.ts'

import type { LoginForm, LoginResponse, UserInfoResponse } from './type'

enum REQUEST_API {
  LOGIN_API = '/user/login',
  USER_API = '/user/info',
}

export const login = (data: LoginForm) =>
  request.post<any, LoginResponse>(REQUEST_API.LOGIN_API, data)

export const getUserInfo = () =>
  request.post<any, UserInfoResponse>(REQUEST_API.USER_API)
