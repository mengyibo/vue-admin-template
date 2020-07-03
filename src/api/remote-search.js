import request from '@/utils/request'

export function searchThirdMenu(menuId) {
  return request({
    url: '/getSubCatalogs/' + menuId,
    method: 'get'
  })
}
export function searchWebsites(thirdMenuid) {
  return request({
    url: '/getSubWebsites/' + thirdMenuid,
    method: 'get'
  })
}
