import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter, Rutes, Route, Routes } from 'react-router-dom';


export default function Root({store}) {
	return (
		<Provider store={ store }>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />}>
						<Route path=":filter" element={<App/>}/>
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}
