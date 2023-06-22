import xxRequest from '../request'

export function getHomeHotSuggests() {
    return xxRequest.get({
        url: "/home/hotSuggests"
    })
}