import React from 'react'
import {createStore} from 'redux'

// reducer
const counter = (state = 0, action ) => {
	switch (action.type) {
		case 'INCREMENT': {
			return state + 1;
		}
		case 'DECREMENT': {
			return state - 1;
		}
		case 'RESET': {
			return state = 0
		}
		default: {
			return state
		}
	}
}

// store
export const store = createStore(counter)

// actions
export const increment = {
	type: 'INCREMENT'
}
export const decrement = {
	type: 'DECREMENT'
}
export const reset = {
	type: 'RESET'
}

