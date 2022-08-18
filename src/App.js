import {createStore, combineReducers} from 'redux'
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addTodo, removeTodo,toggleTodo} from './store/storeTodos'


const App = () => {
	return (
		<div className=' bg-indigo-900 h-screen text-white'>
			<header className='py-4 font-bold text-3xl flex justify-center font-sans items-center container mx-auto'>
				<h1 className='items-center text-teal-400 mx-4' >Hello Redux</h1>
				
			</header>
	
			<main className='container flex flex-col items-center'>
				<NewTodo />
				<TodoList />
			</main>
		</div>
	)


}
const NewTodo = () => {
	const dispatch = useDispatch();
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(addTodo(event.target.title.value))
		event.target.reset();
	}
	return (
		<form onSubmit={handleSubmit}>
			<input type='text' name='title' placeholder='new todo' className='border rounded m-4 px-2 text-black'/>
			<input type='submit' value='Add Todo' className='border rounded px-2 bg-teal-500 cursor-pointer hover:bg-teal-600 active:bg-teal-800'/>
		</form>
	)
}

const TodoList = () => {
	const todos = useSelector(state => state);
	const dispatch = useDispatch()
	return (
		<ul className='text-1xl'>
			{todos.map(todo => (
				<li key={todo.title} className='space-x-5'>
					<input type='checkbox' checked={todo.completed} className='m-2' onChange  ={() => dispatch(toggleTodo(todo.id))}/>{todo.title}
					<button onClick={() => dispatch(removeTodo(todo.id))} className=' border rounded px-2 bg-teal-500 cursor-pointer hover:bg-teal-600 active:bg-teal-800' >delete</button>
				</li>
			))}
		</ul>
	)
}

export default App;
