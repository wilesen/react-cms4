/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-18 09:34:32 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-18 10:11:10
 */

import * as _ from 'lodash';
import { getStorage } from 'utils';

const Can = (code: string) => {
    const AuthList = (getStorage('authCode') || '').split(',');
    const IsCode = Boolean(_.indexOf(AuthList, code) !== -1)
    return IsCode
}

export default Can;