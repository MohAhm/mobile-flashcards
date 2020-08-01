import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import DeckListScreen from '../screens/DeckListScreen'
import IndividualDeckScreen from '../screens/IndividualDeckScreen'
import NewQuestionScreen from '../screens/NewQuestionScreen'
import QuizScreen from '../screens/QuizScreen'
import routes from './routes'
import colors from '../config/colors'

const Stack = createStackNavigator()

const DeckNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: colors.primary },
            headerTintColor: colors.white,
        }}
    >
        <Stack.Screen
            name={routes.DECKLIST}
            component={DeckListScreen}
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

        <Stack.Screen name={routes.NEWQUESTION} component={NewQuestionScreen}/>
        <Stack.Screen name={routes.QUIZ} component={QuizScreen}/>
    </Stack.Navigator>
)

export default DeckNavigator