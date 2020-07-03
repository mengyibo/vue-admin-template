import request from '@/utils/request'

export function searchThirdMenu(menuId) {
  return request({
    url: '/getSubCatalogs/' + menuId,
    method: 'get'
  })
}
