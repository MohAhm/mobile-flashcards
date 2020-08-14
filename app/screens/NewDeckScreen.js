import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'
import { connect } from 'react-redux'

import { saveDeckTitle } from '../actions'
import {
    AppForm as Form,
    AppFormField as FormField,
    SubmitButton
} from '../components/forms'
import Screen from '../components/Screen'
import AppText from '../components/AppText'
import colors from '../config/colors'
import routes from '../navigation/routes'


const validationSchema =  Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
})

class NewDeckScreen extends Component {
    handleAddDeck = (title, { resetForm }) => {
        this.props.dispatch(saveDeckTitle(title))
        resetForm()
        this.props.navigation.navigate(routes.DECKDETAILS, title)
    }

    render () {
        return (
            <Screen style={styles.screen}>
                <AppText style={styles.text}>What is the title of your new deck?</AppText>

                <Form
                    initialValues={{ title: '' }}
                    onSubmit={(values, formikBag) => this.handleAddDeck(values.title, formikBag)}
                    validationSchema={validationSchema}
                >
                    <FormField maxLength={255} name='title' placeholder='Deck Title'/>

                    <SubmitButton title='Create Deck'/>
                </Form>
            </Screen>
        )
    }
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

export default connect()(NewDeckScreen)