export interface LoginForm {
  username: string
  password: string
}

interface DataType {
  token: string
}
export interface LoginResponse {
  code: number
  data: DataType
}

interface UserData {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}
interface Checkuser {
  checkUser: UserData
}
export interface UserInfoResponse {
  code: number
  data: Checkuser
}
