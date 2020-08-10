import React from 'react'

import Screen from '../components/Screen'
import QuizList from '../components/QuizList'


export default function QuizScreen(props) {
    const questions = props.route.params

    return (
        <Screen>
            <QuizList questions={questions} />
        </Screen>
    )
}
