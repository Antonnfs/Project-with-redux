import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement, reset } from '../store';

export default function Counter() {
	const count = useSelector(state => state)
	const dispatch = useDispatch()
	return (
		<div className=' flex p-4'>
			<button onClick={() => dispatch(decrement)} className='p-4'>-</button>
			<h2>{count}</h2>
			<button onClick={() => dispatch(increment)} className='p-4'>+</button>
			<button onClick={() => dispatch(reset)} className='p-4'>reset</button>
		</div>
		)
}
