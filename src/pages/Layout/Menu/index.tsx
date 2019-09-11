/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-11 15:08:04 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-11 15:53:11
 */
import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import styles from './index.less';
import { RouteConfig } from 'router';
import useCan from 'component/Hooks/useCan';

const { SubMenu } = Menu;
interface IProps { }

const LeftMenu: React.FC<IProps> = (): any => {
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
                        const { name: kName, path: kPath, displayMenu: KdisplayMenu } = childItem
                        return KdisplayMenu ? (
                            <Menu.Item key={kName}>
                                <Link to={kPath}>
                                    {kName}
                                </Link>
                            </Menu.Item>
                        ) : null
                    })}
                </SubMenu>
            )
        }
        return <Menu.Item key={name}><Link to={path}>{name}</Link></Menu.Item>
    })
    return (<Menu mode="inline">{ChildrenMenu}</Menu>)
}

export default LeftMenu;
