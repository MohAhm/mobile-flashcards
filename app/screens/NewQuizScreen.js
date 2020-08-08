import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'
import { connect } from 'react-redux'

import { addCardToDeck } from '../actions'
import {
    AppForm as Form,
    AppFormField as FormField,
    SubmitButton
} from '../components/forms'
import Screen from '../components/Screen'


const validationSchema =  Yup.object().shape({
    question: Yup.string().required().min(1).label('Question'),
    answer: Yup.string().required().min(1).label('Answer'),
})

class NewQuizScreen extends Component {
    handleAddDeck = (values) => {
        const { question, answer } = values
        const id = this.props.route.params

        this.props.dispatch(addCardToDeck(id, { question, answer }))
        this.props.navigation.goBack()
    }

    render () {
        return (
            <Screen style={styles.screen}>
                <Form
                    initialValues={{ question: '', answer: ''  }}
                    onSubmit={values => this.handleAddDeck(values)}
                    validationSchema={validationSchema}
                >
                    <FormField maxLength={255} name='question' placeholder='Question'/>
                    <FormField maxLength={255} name='answer' placeholder='Answer'/>

                    <SubmitButton title='Submit'/>
                </Form>
            </Screen>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
    },
})

export default connect()(NewQuizScreen)