import React from 'react';
import { Layout, Row, Icon } from 'antd';
const { Header, Sider, Content, Footer } = Layout;
import styles from './index.less';
import SiderMenu from './SiderMenu';
const SiderHeader: React.FC = props => {
    return (
        <Row type="flex" justify="center" align="middle" className={styles.logo}>
            <h1>U订货后台系统</h1>
        </Row>
    );
}



class MenuLayout extends React.Component {

    constructor(props: any) {
        super(props);
    }

    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        const { children } = this.props;
        return <Layout style={{ minHeight: '100vh' }}>
            <Sider width={256} trigger={null} collapsible collapsed={this.state.collapsed}>
                <SiderHeader></SiderHeader>
                <SiderMenu></SiderMenu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                        className={styles.trigger}
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 280,
                    }}
                >
                    {children}
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout >;
    }
}


export default MenuLayout;