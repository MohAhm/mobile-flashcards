import React, { useState } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Platform, Animated } from 'react-native'

import colors from '../config/colors'
import defaultStyles from '../config/styles'

export default function Deck({ title, numCard, onPress }) {
    const [bounceValue] = useState(new Animated.Value(1))

    const handleBounceValue = () => {
        Animated.sequence([
            Animated.timing(bounceValue, { duration: 200, toValue: 1.09, useNativeDriver: true }),
            Animated.spring(bounceValue, { toValue: 1, friction: 4, useNativeDriver: true }),
        ]).start()

        setTimeout(() => {
            onPress()
        }, 500)
    }

    return (
        <TouchableWithoutFeedback onPress={handleBounceValue}>
            <View style={styles.deck}>
                <View style={styles.detailsContainer}>
                    <Animated.Text
                        style={[
                            defaultStyles.text,
                            styles.title,
                            {transform: [{scale: bounceValue}]}
                        ]}>{title}</Animated.Text>
                    <Animated.Text
                        style={[
                            defaultStyles.text,
                            styles.numCard,
                            {transform: [{scale: bounceValue}]}
                        ]}>{numCard}</Animated.Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    deck: {
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        backgroundColor: colors.white,
        marginBottom: 20,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },

    detailsContainer: {
        padding: 20,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 30,
        marginBottom: 10,
    },

    numCard: {
        color: colors.gray,
        fontWeight: 'bold',
    },
})
