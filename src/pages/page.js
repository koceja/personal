import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Layout, Menu } from 'antd';

import './page.css';


const { Header, Content, Footer } = Layout;

function Page(props) {
    const noFooter = props.noFooter;
    const page = props.page;
    const content = props.content;

    return (
        <Layout className="layout">
            <Header className="header" theme="light">
                <Menu className="navbar" style={{textAlign: "right"}} theme="light" mode="horizontal" defaultSelectedKeys={[page]}>

                    <Menu.Item key="home">Home<Link to="/" /></Menu.Item>
                    <Menu.Item key="projects">Projects<Link to="/projects" /></Menu.Item>
                    <Menu.Item key="resume">Resume<Link to="/resume" /></Menu.Item>
                </Menu>
            </Header>
            <Content className="content">
                {content}
            </Content>
            {(noFooter) ? null: <Footer style={{ textAlign: 'center' }}>Daniel Koceja 2020</Footer>}
        </Layout> 
    );
	
}

export default Page;
