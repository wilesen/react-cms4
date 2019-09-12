/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-12 10:22:19 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-12 11:05:18
 */

import { IRouteConfig } from 'config/routeConfig';
import history from './history';

interface IReturnData {
    defaultSelectedKeys: string[],
    defaultOpenKeys: string[]
}

const getDefaultKey = (routeData: IRouteConfig[]): IReturnData => {
    const location = history.location.hash || '';
    console.log(history)
    const defaultOpenKeys = location.split('/')[1];
    const [full, key] = location.match(/#(\S*)/) || []
    const [defaultSelectedKeys] = routeData;
    if (key) {
        return {
            defaultSelectedKeys: [key],
            defaultOpenKeys: [`/${defaultOpenKeys}`]
        };
    }
    if (defaultSelectedKeys) {
        return {
            defaultSelectedKeys: [defaultSelectedKeys.path],
            defaultOpenKeys: [`/${defaultOpenKeys}`]
        };
    }

    return {
        defaultSelectedKeys: [''],
        defaultOpenKeys: ['']
    }

}

export default getDefaultKey;