import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addTodo, removeTodo,toggleTodo} from '../store/todos/todos-actions'
import { selectVisibleTodos } from '../store/todos/todos-selectors';
import { selectActiveFilter } from '../store/filters/filters-selectors'; 


export const TodoList = () => {
	const dispatch = useDispatch()
	const activeFilter = useSelector(selectActiveFilter)
	const todos = useSelector(state => selectVisibleTodos(state, activeFilter));

	return (
		<ul className='text-1xl'>
			{todos.map(todo => (
				<li key={todo.id} className='space-x-5'>
					<input type='checkbox' checked={todo.completed} className=' m-2' onChange={() => dispatch(toggleTodo(todo.id))}/><span className=''>{todo.title}</span>
					<button onClick={() => dispatch(removeTodo(todo.id))} className=' border rounded px-2 bg-teal-500 cursor-pointer hover:bg-teal-600 active:bg-teal-800' >delete</button>
				</li>
			))}
		</ul>
	)
}
