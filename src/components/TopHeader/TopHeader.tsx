import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import styles from './TopHeader.module.scss'

const { Header } = Layout;
const { Title } = Typography;

const TopHeader: React.FC = () => {
    return (
        <Header className={styles.header}>
            
            <Title>GIPHY</Title>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']} style={{marginLeft: '200px'}} inlineCollapsed>
                <Menu.Item key="1" style={{opacity: 1, order: 1}}>nav 1</Menu.Item>
                <Menu.Item key="2" style={{opacity: 1, order: 1}}>nav 2</Menu.Item>
                <Menu.Item key="3" style={{opacity: 1, order: 1}}>nav 3</Menu.Item>
            </Menu>
        </Header>
    )
};

export default TopHeader;
