import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeNavigator from './HomeNavigator'
import DeckDetailsScreen from '../screens/DeckDetailsScreen'
import NewQuizScreen from '../screens/NewQuizScreen'
import QuizScreen from '../screens/QuizScreen'
import routes from './routes'
import colors from '../config/colors'

const Stack = createStackNavigator()

const AppNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: colors.purple },
            headerTintColor: colors.white,
            headerBackTitleVisible: false,
        }}
    >
        <Stack.Screen
            name={routes.HOME}
            component={HomeNavigator}
            options={{
                headerTitle: false,
            }}
        />

        <Stack.Screen
            name={routes.DECKDETAILS}
            component={DeckDetailsScreen}
            options={({ route }) => ({ title: route.params.title })}
        />

        <Stack.Screen
            name={routes.NEWQUIZ}
            component={NewQuizScreen}
            options={{
                headerTitle: 'Add Card',
            }}
        />

        <Stack.Screen name={routes.QUIZ} component={QuizScreen} />
    </Stack.Navigator>
)

export default AppNavigator