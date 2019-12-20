import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer.js'
import App from './App.js'
let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
render(
	<Provider store={store}>
		<App></App>
	</Provider>,
	document.getElementById('app-container')
)