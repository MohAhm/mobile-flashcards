import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../config/colors'

export default function AppButton({ title, onPress, outline=false, color='purple' }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                    styles.button,
                    outline === false
                    ?   {
                            backgroundColor: colors[color],
                        }
                    :   {
                            backgroundColor: colors.white,
                            borderColor: colors[color],
                            borderWidth: 1,
                        }
            ]}>

            <Text style={[
                styles.text,
                outline === false
                ?   {
                        color: colors.white,
                    }
                :   {
                        color: colors[color],
                    }
            ]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10,
        borderRadius: 25,
    },

    text: {
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
})
