import React from 'react';

import { Link, useParams } from 'react-router-dom';

export default function Filters() {
	const {filter = 'all'} = useParams()
	return (
		<div className=' flex justify-center gap-5 mb-7 border-b'>
			<Link to='/all' className={filter === 'all' ? 'text-red-500' : 'text-black-900'}>All</Link>
			<Link to='/active' className={filter === 'active' ? 'text-red-500' : 'text-black-900'}>Active</Link>
			<Link to='/completed' className={filter === 'completed' ? 'text-red-500' : 'text-black-900'}>Completed</Link>
		</div>
	)
}