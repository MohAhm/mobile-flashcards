import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { NavigationContainer } from '@react-navigation/native'

import reducer from './app/reducers'
import navigationTheme from './app/navigation/navigationTheme'
import AppNavigator from './app/navigation/AppNavigator'


export default function App() {
	const store = createStore(reducer, applyMiddleware(thunk))

	return (
		<Provider store={store}>
			<NavigationContainer theme={navigationTheme}>
				<AppNavigator />
			</NavigationContainer>
		</Provider>
	)
}
