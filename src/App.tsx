import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Gifs from './components/Gifs/Gifs';
import { Route, Routes, useParams } from 'react-router-dom';
import {  useGetSearchQuery } from './services/searchApi';
import Gif from './components/Gif/Gif';
import MainContent from './components/Content/Content';
import { useNavigate } from 'react-router-dom';
import LoginForm from './components/Login/LoginForm'
import RegistrationForm from './components/Register/Register';

const App: React.FC = () => {
	const navigate = useNavigate();
	const [showGifs, setShowGifs] = useState<any>([]);
	const [category, setCategory] = useState('');
	const [offset, setOffset] = useState(0)
	const [get, setGet] = useState('trending');
	const {data, isLoading} = useGetSearchQuery({tranding: get, limit: 50, offset: offset, q: category });

	useEffect(() => {
		navigate('login')
	}, [])

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
				<Route path='/login' element={<LoginForm/>} />
				<Route path='/register' element={<RegistrationForm/>} />
			</Routes>
		</Layout>
	)
}
export default App;

