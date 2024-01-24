export const SET_TOKEN = (value: string) => {
  localStorage.setItem('TOKEN', value)
}

export const GET_TOKEN = () => {
  return localStorage.getItem('TOKEN')
}
