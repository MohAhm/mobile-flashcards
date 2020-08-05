import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

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

export default function NewQuizScreen() {
    return (
        <Screen style={styles.screen}>
            <Form
                initialValues={{ question: '', answer: ''  }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormField maxLength={255} name='question' placeholder='Question'/>
                <FormField maxLength={255} name='answer' placeholder='Answer'/>

                <SubmitButton title='Submit'/>
            </Form>
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
    },
})
