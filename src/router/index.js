import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { routeModules } from './route';
import { Layout } from 'antd';

const { Header, Content, Sider, Footer } = Layout;

class Index extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Header>

                    </Header>
                    <Layout>
                        <Sider>
                            <ul>
                                <li><Link to={routeModules[0].path}>{routeModules[0].name}</Link></li>
                                <li><Link to={routeModules[2].path}>{routeModules[2].name}</Link></li>
                            </ul>
                        </Sider>
                        <Content>
                            {
                                routeModules.map((v, k) => {
                                    return (<Route key={k} path={v.path} exact={v.exact} component={v.component}></Route>)
                                })
                            }
                        </Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </Router>
        );
    }
}
export default Index;

