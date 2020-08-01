import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import NewDeckScreen from '../screens/NewDeckScreen'
import IndividualDeckScreen from '../screens/IndividualDeckScreen'
import routes from './routes'
import colors from '../config/colors'

const Stack = createStackNavigator()

const NewDeckNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: colors.primary },
            headerTintColor: colors.white,
        }}
    >
        <Stack.Screen
            name={routes.NEWDECK}
            component={NewDeckScreen}
            options={{
                headerTitle: false,
            }}
        />
        <Stack.Screen
            name={routes.INDIVIDUALDECK}
            component={IndividualDeckScreen}
            options={{
                headerBackTitleVisible: false,
            }}
        />
    </Stack.Navigator>
)

export default NewDeckNavigator