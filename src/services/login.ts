import /* request, */ { req } from '@/utils/request'
import type { IInfoData } from './types/login'

// interface IResponse<T> {
//   success: boolean;
//   data: T
// }

export async function getLoginInfo () {
  // return request.get<IResponse<IInfoData[]>>('/api/v1/topics')
  return req<IInfoData[]>({
    method: 'get',
    url: '/api/v1/topics'
  })
}
