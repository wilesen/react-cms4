/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-05 15:13:59 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-10 15:50:42
 */

// import * as React from 'react';
import request from 'utils/require';
import * as _ from 'lodash';

const useCan = (code: string) => {

    console.log(request);
    const AuthList = ['101', '102']
    const IsCode = Boolean(_.indexOf(AuthList, code) !== -1)
    return [IsCode, AuthList]
}

export default useCan;