import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import {
    AppForm as Form,
    AppFormField as FormField,
    SubmitButton
} from '../components/forms'
import Screen from '../components/Screen'
import AppText from '../components/AppText'
import routes from '../navigation/routes'
import colors from '../config/colors'
import api from '../utils/api'

const validationSchema =  Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
})

export default function NewDeckScreen({ navigation }) {
    handleSaveDeck = async (title) => {
        await api.saveDeckTitle(title)
    }

    return (
        <Screen style={styles.screen}>
            <AppText style={styles.text}>What is the title of your new deck?</AppText>

            <Form
                initialValues={{ title: '' }}
                onSubmit={values => handleSaveDeck(values.title)}
                validationSchema={validationSchema}
            >
                <FormField maxLength={255} name='title' placeholder='Deck Title'/>

                <SubmitButton title='Create Deck'/>
            </Form>
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
        justifyContent: 'center',
    },

    text: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
    },
})
