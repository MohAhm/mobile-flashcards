import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import DeckListScreen from '../screens/DeckListScreen'
import NewDeckScreen from '../screens/NewDeckScreen'
import routes from './routes'

const Tab = createBottomTabNavigator()

const HomeNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
            name={routes.DECKS}
            component={DeckListScreen}
            options={{
                tabBarLabel: 'Decks',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                        name='cards'
                        color={color}
                        size={30}
                    />
                )
            }}
        />

        <Tab.Screen
            name={routes.NEWDECK}
            component={NewDeckScreen}
            options={{
                tabBarLabel: 'Add Deck',
                tabBarIcon:({ color }) => (
                    <MaterialCommunityIcons
                        name='plus-circle'
                        color={color}
                        size={30}
                    />
                )
            }}
        />
    </Tab.Navigator>
)

export default HomeNavigator