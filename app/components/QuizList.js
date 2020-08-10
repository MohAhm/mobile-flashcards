import React, { useRef } from 'react'
import { ScrollView, Text, StyleSheet, Dimensions, View } from 'react-native'
import Quiz from './Quiz'

const screenWidth = Dimensions.get('screen').width // temp

export default function QuizList({ questions = [] }) {
    const scrollView = useRef()

    // Restart:
    // 1.    reset count state to 0
    // 2.    scrollTo x: 0

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
                />
            ))}

            <View style={styles.contentContainer}>
                <Text>Result</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        width: screenWidth,
        marginVertical: 20,
    },
})