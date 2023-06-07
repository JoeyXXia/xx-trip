import xxRequest from '../request'

export function getCityAll() {
    return xxRequest.get({
        url:"/city/all"
    })
}