/*
 * @Author: tingzi.wen
 * @Date: 2019-09-10 15:18:42
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-12-24 14:51:37
 */

import axios from 'axios';


const Require = () => {
  const get = (url: string, data?: any): any => {
    return axios.get(url, {
      params: data
    })
  }

  const post = (url: string, data?: any) => {
    return axios.post(url, {
      ...data
    })
  }

  return {
    get,
    post
  }
}

export default Require();

