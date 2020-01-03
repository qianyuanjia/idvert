import axios from 'axios'
import qs from 'qs'

export const post = (url, payload = {}) => {
  let result = ''
  if (localStorage.token) {
    result = { ...payload, token: localStorage.token }
  } else {
    result = payload
  }

  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      baseURL: '/api',
      data: qs.stringify(result)
    })
      .then(response => {
        resolve(response)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const get = (url, payload) => {
  let result = ''

  if (localStorage.getItem('token')) {
    result = { ...payload, token: localStorage.getItem('token') }

  } else {
    result = payload
  }

  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url,
      params: result,
      baseURL: '/api'
    })
      .then(res => {
        resolve(res)
      })
      .catch(err => reject(err))
  })
}