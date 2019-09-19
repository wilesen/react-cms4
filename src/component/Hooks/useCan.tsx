/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-05 15:13:59 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-18 10:10:44
 */

// import * as React from 'react';
import { getStorage } from 'utils';
import * as _ from 'lodash';

const useCan = (code: string) => {
    const AuthList = (getStorage('authCode') || '').split(',');
    const IsCode = Boolean(_.indexOf(AuthList, code) !== -1)
    return [IsCode, AuthList]
}

export default useCan;