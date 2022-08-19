import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addTodo, removeTodo,toggleTodo} from '../store/todos/todos-actions'


export const NewTodo = () => {
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
