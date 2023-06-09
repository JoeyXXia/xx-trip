import xxRequest from '../request'

export function getHomeHotSuggests() {
    return xxRequest.get({
        url: "/home/hotSuggests"
    })
}

export function getHomeCategories() {
    return xxRequest.get({
        url: "/home/categories"
    })
}

export function getHomeHouseList(currentPage) {
    return xxRequest.get({
        url: "/home/houselist",
        params:{
            page:currentPage
        }
    })
}