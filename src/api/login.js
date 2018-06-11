import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/api/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/api/logout',
    method: 'get'
  })
}

export function getUserInfo(id) {
  return request({
    url: '/api/menus',
    method: 'get',
   // params: { token }
  })
}

