import axios from 'axios'
import qs from 'qs'

export function requestPost(url, action = {}) {

    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            baseURL: '/api',
            url,
            data: qs.stringify(action),
        })
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export function requestGet(url) {
    return new Promise((resolve, reject) => {
        axios({
            url
        })
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}
