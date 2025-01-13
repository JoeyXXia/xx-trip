import xxRequest from "../request"

export function getFavorList() {
  return xxRequest.get({
    url: "/favor/list",
  })
}

export function getHistoryList() {
  return xxRequest.get({
    url: "/favor/history",
  })
}
