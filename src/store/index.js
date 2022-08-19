import {createStore} from 'redux';
import { rootReducer } from './root-reducer';
import { loadState, saveState } from './local-storage';
import { throttle } from 'lodash';



// export const store = () => {
// 	const persistedState = loadState()
// 	const confStore = createStore(
// 		rootReducer,
// 		persistedState,
// 		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 	)
// 	confStore.subscribe(() => {
// 		saveState(confStore.getState())
// 	})

// 	return confStore;
// }
export const configureStore = () => {
	const persistedState = loadState()
	const store = createStore(
		rootReducer,
		persistedState,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
	store.subscribe(throttle(() => {
		saveState(
			{
				todos: store.getState().todos,
			}
		)
	}, 1000))

	return store;
}
