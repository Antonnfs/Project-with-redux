import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addTodo, removeTodo,toggleTodo} from '../store/todos/todos-actions'


export const TodoList = () => {
	const todos = useSelector(state => state.todos);
	const dispatch = useDispatch()
	return (
		<ul className='text-1xl'>
			{todos.map(todo => (
				<li key={todo.id} className='space-x-5'>
					<input type='checkbox' checked={todo.completed} className='m-2' onChange={() => dispatch(toggleTodo(todo.id))}/>{todo.title}
					<button onClick={() => dispatch(removeTodo(todo.id))} className=' border rounded px-2 bg-teal-500 cursor-pointer hover:bg-teal-600 active:bg-teal-800' >delete</button>
				</li>
			))}
		</ul>
	)
}
