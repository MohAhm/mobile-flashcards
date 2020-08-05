import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

import colors from '../config/colors'
import defaultStyles from '../config/styles'

export default function AppTextInput({ width = '100%', ...otherProps }) {
    return (
        <View style={[styles.container, { width }]}>
            <TextInput
                placeholderTextColor={colors.gray}
                style={defaultStyles.text}
                {...otherProps}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 25,
        padding: 15,
        marginVertical: 10,
    }
})
