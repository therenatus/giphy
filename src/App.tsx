import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Gifs from './components/Gifs/Gifs';
import { Route, Routes, useParams } from 'react-router-dom';
import {  useGetSearchQuery } from './services/searchApi';
import Gif from './components/Gif/Gif';
import MainContent from './components/Content/Content';

const { Content } = Layout;

const App: React.FC = () => {
	const [showGifs, setShowGifs] = useState<any>([]);
	const [category, setCategory] = useState('');
	const [offset, setOffset] = useState(0)
	const [get, setGet] = useState('trending');
	const {data, isLoading} = useGetSearchQuery({tranding: get, limit: 50, offset: offset, q: category });
	useEffect(() => {
		setShowGifs(data?.data)
	}, [data])	
	if(isLoading) return <h1>Loading ...</h1>
	return (
		<Layout>
			<Routes>
				<Route path='*' element={<MainContent/>} >
					<Route index element={<Gifs datas={showGifs}  isLoading={isLoading}/>} />
					<Route path=':category/:id' element={<Gif/>} />
					<Route path=':category' element={<Gifs datas={showGifs}  isLoading={isLoading}/>} />
				</Route>
			</Routes>
		</Layout>
	)
}
export default App;

