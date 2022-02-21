import Layout, { Content } from 'antd/lib/layout/layout'
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useGetSearchQuery } from '../../services/searchApi'
import { Datum } from '../../types/IFetchData'
import Gif from '../Gif/Gif'
import Gifs from '../Gifs/Gifs'
import Navbar from '../Navbar/Navbar'
import TopHeader from '../TopHeader/TopHeader'

const MainContent = () => {
	const [showGifs, setShowGifs] = useState<any>([]);
	const [category, setCategory] = useState('');
	const [offset, setOffset] = useState(0)
	const [get, setGet] = useState('trending');
	const {data, isLoading, isError} = useGetSearchQuery({tranding: get, limit: 50, offset: offset, q: category });
	useEffect(() => {
		if(offset > 0){
			let newArr: Datum[];
			if(data !== undefined){
				newArr = [...showGifs, ...data.data]
			}else{
				newArr = [...showGifs]
			}
			setShowGifs(newArr)
		}else{
			setShowGifs(data?.data)
		}
	}, [data])

	const changeCategory = (method : string , categoryName: string) => {
		setGet(method);
		setCategory(categoryName);
		setShowGifs([]);
	}

	const getTrending = (trending: string) => {
		setGet(trending);
		setCategory('');
		setShowGifs([]);

	}
	if(isLoading) return <h1>ddddd</h1>
    return (
		<div style={{display: 'block'}}>
		<TopHeader getTrending={getTrending}/>
        <Content>
            <Layout className="site-layout-background" hasSider >
                <Navbar changeCategory={changeCategory} />
                    <Content style={{ padding: '0 20px 0 200px', height: '100vh', background: '#001529', width:'100vw'}}>
						<Routes>
							<Route index element={<Gifs datas={showGifs}  isLoading={isLoading}/>} />
							<Route path=':category' element={<Gifs datas={showGifs}  isLoading={isLoading}/>} />
							<Route path=':category/:id' element={<Gif/>} />
						</Routes>
                    </Content>
            </Layout>
        </Content>
		</div>
    )
}

export default MainContent