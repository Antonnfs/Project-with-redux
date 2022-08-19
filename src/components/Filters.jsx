import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectActiveFilter } from '../store/filters/filters-selectors'; 
import { setFilter } from '../store/filters/filters-actions';

export default function Filters() {
	const dispatch = useDispatch();
	const activeFilter = useSelector(selectActiveFilter);

	return (
		<div className=' flex justify-center gap-5 mb-7 border-b'>
			<button onClick={() => dispatch(setFilter('all'))} className={activeFilter === 'all' ? 'text-red-500' : 'text-black-900'}>All</button>
			<button onClick={() => dispatch(setFilter('active'))} className={activeFilter === 'active' ? 'text-red-500' : 'text-black-900'}>Active</button>
			<button onClick={() => dispatch(setFilter('completed'))} className={activeFilter === 'completed' ? 'text-red-500' : 'text-black-900'}>Completed</button>
		</div>
	)
}