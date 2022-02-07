import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import DataService from '../../services/service';
import ICategoryData from '../../types/ICategoryData';

const { SubMenu } = Menu;
const { Sider } = Layout;

const Navbar = () => {
    let state: any;
    let setState: any;
    [state, setState] = useState<ICategoryData[]>([]);
    useEffect(() => {
		DataService.getCategories()
			.then((response: any)=>{
				setState(response.data);
                
			})
	},[])

return (
    <Sider className="site-layout-background" width={200} style={{
        overflow: 'auto',
        position: 'fixed',
        height: '100vh'
        }}>
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={[]}
            style={{ height: '100%' }}
            theme='dark'
        >
            {
            state.data?.map((el: any, id: number) => {
                return (
                    <SubMenu key={id} title={el.name}>
                        {el.subcategories.map((item: any, idx: any) => {
                            return (
                                <Menu.Item key={`${el.name}_${idx}`}>{item.name}</Menu.Item>
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
