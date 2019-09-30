import React from 'react';
import { Layout, Icon } from 'antd';
const { Header, Content, Footer } = Layout;
import styles from './index.less';
import SiderMenuWrapper from '../../components/SiderMenu/index';
import { getMenuData } from '../../common/menu';
import logo from '../../assets/logo.svg';
import { debounce } from 'lodash';

interface MenuLayouProps {
    location?: any
}
class MenuLayout extends React.Component<MenuLayouProps> {
    constructor(props: MenuLayouProps) {
        super(props);
        this.handResize = this.handResize.bind(this);
    }
    state = {
        collapsed: false,
        isMobile: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    handResize = (e: any) => {
        this.resizeChange(e.target.innerWidth);
    }
    resizeChange = (width = window.innerWidth) => {
        if (width > 768) {
            this.setState({
                isMobile: false,
            });
        } else {
            this.setState({
                isMobile: true,
            });
        }
    }

    componentDidMount() {
        this.resizeChange();
        window.addEventListener('resize', debounce(this.handResize, 100))
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handResize);
    }

    render() {
        const { children, location } = this.props;
        /**
         * isMobile 手机端菜单
         */
        const { collapsed, isMobile } = this.state;
        return <Layout style={{ minHeight: '100vh' }}>
            <SiderMenuWrapper
                logo={logo}
                collapsed={collapsed}
                menuData={getMenuData()}
                location={location}
                onCollapse={this.toggle}
                isMobile={isMobile}
            />
            <Layout>
                {USE_MODE === "development" ?
                    <Header style={{ background: '#fff', padding: 0 }}>
                        {!isMobile ? <Icon
                            className={styles.trigger}
                            type={collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        /> : null}
                    </Header> : null}
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
                {USE_MODE === "development" ? <Footer>Footer</Footer> : null}
            </Layout>
        </Layout >;
    }
}


export default MenuLayout;