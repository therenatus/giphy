import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../services/categoryApi';

const { SubMenu } = Menu;
const { Sider } = Layout;

const Navbar = ({changeCategory}: any) => {
    const {data: state = [], isLoading} = useGetCategoriesQuery({limit: 10, offset: 20});

    if(isLoading) return <h1>Loading ...</h1>

    return (
        <Sider className="site-layout-background" width={200} style={{
            overflow: 'auto',
            position: 'fixed',
            height: '100vh'
            }}>
            <Menu
                mode="inline"
                defaultSelectedKeys={[]}
                defaultOpenKeys={[]}
                style={{ height: '100%' }}
                theme='dark'
            >
                {
                state.data.map((el: any, id: number) => {
                    return (
                        <SubMenu key={id} title={el.name}>
                            {el.subcategories.map((item: any, idx: any) => {
                                return (
                                    <Menu.Item key={`${item.name}_${idx}`} onClick={() => changeCategory('search', item.name)} >
                                        <Link to={item.name} key={`${item.name}_${idx}`}>{item.name}</Link>
                                    </Menu.Item>
                                )
                            })}
                        </SubMenu>
                        )
                    })
                }
            </Menu>
        </Sider>
    )
};

export default Navbar;
