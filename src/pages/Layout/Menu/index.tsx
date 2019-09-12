/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-11 15:08:04 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-12 11:09:28
 */
import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import RouteConfig from 'config/routeConfig';
import useCan from 'component/Hooks/useCan';
import { getDefaultKey } from 'utils';

const { SubMenu } = Menu;
interface IProps { }

const LeftMenu: React.FC<IProps> = (): any => {
    const { defaultSelectedKeys, defaultOpenKeys } = getDefaultKey(RouteConfig);
    const ChildrenMenu = RouteConfig.map((item: any) => {
        const { path, name, children, authCode } = item;
        if (children && children.length) {
            return (
                <SubMenu
                    key={path}
                    title={
                        <span>
                            <Icon type="mail" />
                            {name}
                        </span>
                    }
                >
                    {children.map((childItem: any) => {
                        const { name: kName, path: kPath, displayMenu: KdisplayMenu, authCode: KauthCode } = childItem;
                        return KdisplayMenu ? (
                            <Menu.Item key={kPath}>
                                <Link to={kPath}>
                                    {kName}
                                </Link>
                            </Menu.Item>
                        ) : null
                    })}
                </SubMenu>
            )
        }
        return <Menu.Item key={path}><Link to={path}>{name}</Link></Menu.Item>
    })
    return (<Menu theme="dark" mode="inline" defaultOpenKeys={defaultOpenKeys} defaultSelectedKeys={defaultSelectedKeys}>{ChildrenMenu}</Menu>)
}

export default LeftMenu;
