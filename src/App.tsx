import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import TopHeader from './components/TopHeader/TopHeader';
import Navbar from './components/Navbar/Navbar';
import 'antd/dist/antd.css';
import DataService from './services/service'
import IFetchData from './types/IFetchData';

const { Content } = Layout;



const App: React.FC = () => {
	let state: any;
    let setState: any;
    [state, setState] = useState<any>([]);
    useEffect(() => {
		DataService.getTrendings()
			.then((response: any)=>{
				setState(response.data);
                
			})
	},[])

	return (
		<Layout>
			<TopHeader />
			<Content >
				<Layout className="site-layout-background" hasSider>
					<Navbar />
					{ console.log(state.data)}
					<Content style={{ padding: '0 24px', height: '100vh', background: '#001529', paddingLeft: '360px'}}>
					{
						state.data?.map((el: any, id: number) => {
							console.log(el)
							return (
								<img width={200} src={el.images.original.url} alt="image" key={id} />
							)
						})
					}
					</Content>
				</Layout>
			</Content>
		</Layout>
	)
}
export default App;

