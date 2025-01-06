import xxRequest from "../request"

// type = pend unfinished order
// type = all all order
// type = recent recent order

export function getOrderList(type = "all") {
  return xxRequest.get({
    url: `/order/list?type=${type}`,
  })
}
