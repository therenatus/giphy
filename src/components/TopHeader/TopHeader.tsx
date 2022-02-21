import React, { ReactNode } from 'react';
import { Layout, Menu, Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import styles from './TopHeader.module.scss'

const { Header } = Layout;
const { Title } = Typography;
interface Props {
    getTrending: any
}
const TopHeader = ({getTrending}: Props) => {
    return (
        <Header className={styles.header}>
            
            <Title className={styles.logo}><Link to='/'>GIPHY</Link></Title>
            <Button type="primary" style={{marginTop: '10px', marginLeft: '20px'}} onClick={() => getTrending('trending')}>Trending</Button>
        </Header>
    )
};

export default TopHeader;
