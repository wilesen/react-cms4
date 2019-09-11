/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-11 15:08:04 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-11 15:25:25
 */
import React from 'react';
import { Menu, Icon } from 'antd';
import styles from './index.less';
import { RouteConfig } from 'router';

const { SubMenu } = Menu;
interface IProps { }

const LeftMenu: React.FC<IProps> = (): any => {
    const ChildrenMenu = RouteConfig.map((item: any) => {
        const { path, name, children } = item;
        if (children && children.length) {
            return (
                <SubMenu
                    key={path}
                    title={
                        <span>
                            <Icon type="mail" />
                            <span>{name}</span>
                        </span>
                    }
                >
                    {children.map((childItem: any) => {
                        return (<Menu.Item key={childItem.name}>{childItem.name}</Menu.Item>)
                    })}
                </SubMenu>
            )
        }
        return <Menu.Item key={name}>{name}</Menu.Item>
    })
    return (<Menu mode="inline">{ChildrenMenu}</Menu>)
}

export default LeftMenu;
