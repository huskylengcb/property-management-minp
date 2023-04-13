import { domain, wxRequest } from '../index';

export const getAdvertsList = () => {
    wxRequest({
        url: `${domain}/api/v1/adverts`,
        method: 'GET',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          console.log('RES' + res)
        },
        fail (res) {
          console.log(res);
        }
      })
    
}