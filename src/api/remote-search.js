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
export function searchRecommendation() {
  return request({
    url: '/tags?numCount=10',
    method: 'get'
  })
}
export function searchEngine(searcText) {
  return request({
    url: '/search?searchMsg=' + searcText,
    method: 'get'
  })
}
export function searchallThirdmenu(selectedSecondmenu) {
  return request({
    url: '/level2SubWebsites/' + selectedSecondmenu,
    method: 'get'
  })
}
export function searchallwebsites() {
  return request({
    url: '/websites/all',
    method: 'get'
  })
}
