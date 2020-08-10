import React from 'react'
import { StyleSheet, View, Platform, Dimensions } from 'react-native'
import FlipCard from 'react-native-flip-card'

import AppText from './AppText'
import AppButton from './AppButton'
import colors from '../config/colors'

const screenWidth = Dimensions.get('screen').width

export default function Quiz(props) {
    const { question, answer, remainingInfo, scroll, pageNum } = props

    // handleScroll = () => {}

    return (
        <View>
            <AppText style={styles.remainingInfo}>{remainingInfo}</AppText>

            <View style={styles.contentContainer}>
                <FlipCard
                    style={styles.card}
                    flipHorizontal={true}
                    flipVertical={false}
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

            <View style={styles.buttonContainer}>
                <AppButton
                    title='Correct'
                    outline
                    color='success'
                    onPress={() => { scroll.current.scrollTo({ x: screenWidth * pageNum})}} />
                <AppButton title='Incorrect' outline color='danger' onPress={() => console.log('Incorrect')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
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

    buttonContainer: {
        padding: 30,
    },
})
