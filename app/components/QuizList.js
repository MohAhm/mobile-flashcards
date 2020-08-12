import React, { useRef, useState } from 'react'
import { ScrollView, Text, StyleSheet, Dimensions, View } from 'react-native'
import Quiz from './Quiz'
import QuizResult from './QuizResult'

const screenWidth = Dimensions.get('screen').width // temp

export default function QuizList({ questions = [], navigation }) {
    const scrollView = useRef()
    const [count, setCount] = useState(0)

    const handleCount = isCorrect => {
        if(isCorrect)
            setCount(count + 1)
    }

    const handleRestart = scrollView => {
        setCount(0)
        scrollView.current.scrollTo({ x: 0 })
    }

    const handleGoBack = () => {
        navigation.goBack()
    }

    return (
        <ScrollView
            ref={scrollView}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
        >
            {questions.map((quiz, i) => (
                <Quiz
                    key={i}
                    question={quiz.question}
                    answer={quiz.answer}
                    scroll={scrollView}
                    pageNum={i+1}
                    remainingInfo={`${i+1} / ${questions.length}`}
                    onCount={handleCount}
                />
            ))}

            <View style={styles.resultContainer}>
                <QuizResult
                    percentage={Math.floor((100 * count) / questions.length)}
                    onRestart={() => {handleRestart(scrollView)}}
                    onBack={() => {handleGoBack()}}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    resultContainer: {
        flexDirection: 'row',
        width: screenWidth,
    },
})