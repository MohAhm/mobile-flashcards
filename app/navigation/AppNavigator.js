import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import DeckNavigator from './DeckNavigator'
import NewDeckNavigator from './NewDeckNavigator'
import routes from './routes'

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
            name={routes.DECKLIST}
            component={DeckNavigator}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons
                        name='ios-bookmarks'
                        color={color}
                        size={size}
                    />
                )
            }}
        />
        <Tab.Screen
            name={routes.NEWDECK}
            component={NewDeckNavigator}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome
                        name='plus-square'
                        color={color}
                        size={size}
                    />
                )
            }}
        />
    </Tab.Navigator>
)

export default AppNavigator