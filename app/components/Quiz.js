import React, { useState } from 'react'
import { StyleSheet, View, Platform, Dimensions } from 'react-native'
import FlipCard from 'react-native-flip-card'

import AppText from './AppText'
import AppButton from './AppButton'
import colors from '../config/colors'

const screenWidth = Dimensions.get('screen').width

export default function Quiz({ question, answer, remainingInfo, scroll, pageNum, onCount } ) {
    const [flip, setFlip] = useState(false)
    const [show, setShow] = useState(false)

    const handleShowAnswer = () => {
        setFlip(!flip)
        setShow(!show)
    }

    const handleScroll = (pageNum, isCorrect) => {
        scroll.current.scrollTo({ x: screenWidth * pageNum})
        setFlip(!flip)
        setShow(!show)
        onCount(isCorrect)
    }

    return (
        <View>
            <AppText style={styles.remainingInfo}>{remainingInfo}</AppText>

            <View style={styles.contentContainer}>
                <FlipCard
                    flip={flip}
                    clickable={false}
                    style={styles.card}
                    flipHorizontal={true}
                    flipVertical={false}
                    onFlipStart={() => {setFlip(true)}}
                >
                    {/* Face Side */}
                    <View style={styles.cardContent}>
                        <View>
                            <AppText style={styles.text}>{question}</AppText>
                            <AppText style={styles.info}>Question</AppText>
                        </View>
                    </View>
                    {/* Back Side */}
                    <View style={styles.cardContent}>
                        <View>
                            <AppText style={styles.text}>{answer}</AppText>
                            <AppText style={styles.info}>Answer</AppText>
                        </View>
                    </View>
                </FlipCard>
            </View>

            {!show
                ?   <View style={styles.buttonContainer}>
                        <AppButton
                            title='Show Answer'
                            outline
                            onPress={() => {handleShowAnswer()}}
                        />
                    </View>

                :   <View style={styles.buttonContainer}>
                        <AppButton
                            title='Correct'
                            outline
                            color='success'
                            onPress={() => {handleScroll(pageNum, true)}} />

                        <AppButton
                            title='Incorrect'
                            outline
                            color='danger'
                            onPress={() => {handleScroll(pageNum, false)}} />
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: screenWidth,
        marginVertical: 20,
    },

    remainingInfo: {
        padding: 10,
        fontWeight: 'bold',
    },

    card: {
        flex: 0,
        backgroundColor: colors.lightPurp,
        width: '80%',
        height: 400,
        alignSelf: 'center',
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
    },

    cardContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: colors.white,
        fontSize: 25,
        fontWeight: 'bold',
        padding: 15,
    },

    info: {
        color: colors.white,
        alignSelf: 'center',
    },

    showAnswerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 60,
    },

    showAnswerText: {
        color: colors.purple,
        fontWeight: 'bold',
    },

    icon: {
        marginLeft: 10,
    },

    buttonContainer: {
        padding: 30,
    },
})
