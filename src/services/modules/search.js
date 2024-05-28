import xxRequest from "../request"

export function getSearchTop() {
  return xxRequest.get({
    url: "/home/search/top",
  })
}

export function getSearchResult() {
  return xxRequest.get({
    url: "/search/result",
  })
}
