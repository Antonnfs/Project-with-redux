import {createStore, combineReducers} from 'redux'
import React, {useState} from 'react';

import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';
import Filters from './components/Filters';


const App = () => {
	return (
		<div className=' bg-indigo-900 h-screen text-white'>
			<header className='py-4 font-bold text-3xl flex justify-center font-sans items-center container mx-auto'>
				<h1 className='items-center text-teal-400 mx-4' >Todo list with Redux</h1>
			</header>
			<main className='container mx-auto flex flex-col items-center'>
				<NewTodo />
					<Filters/>
				<TodoList />
			</main>
		</div>
	)


}




export default App;
