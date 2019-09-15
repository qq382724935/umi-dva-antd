import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
import Link from 'umi/link';

class SiderMenu extends Component {
    render() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <SubMenu title={
                    <span>
                        <Icon type="user" />
                        <span>会员管理</span>
                    </span>
                } >
                    <Menu.Item key="1">
                        <Link to="/user/vip">
                            <span>VIP会员</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/user/ordinary">普通会员</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/user/male">女会员</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu title={
                    <span>
                        <Icon type="user" />
                        <span>系统管理</span>
                    </span>
                } >
                    <Menu.Item key="1">
                        <Link to="/admin/menuAdmin">
                            <span>VIP会员</span>
                        </Link>
                    </Menu.Item>

                </SubMenu>
            </Menu>
        );
    }
}

export default SiderMenu;