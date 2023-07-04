import xxRequest from '../request'

export function getDetailInfos(houseId) {
    return xxRequest.get({
        url:"/detail/infos",
        params:{
            houseId
        }
    })
}