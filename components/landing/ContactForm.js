import React from "react"
import firebase from 'firebase/clientApp'
import MyFormikField from 'components/form/MyFormikField';
import MyBasicButton from "components/form/MyButton";
import { useFormik } from 'formik';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../lib/slices/generalSlice";
import composeMail from "firebase/functions/composeMail";
import { CenterSection, FlexCol } from "styles/shared";
import MySnackBar from "components/form/MySnackBar";

const Wrap = styled(CenterSection)` 
    width: 30rem;
`

const FormWrap = styled(CenterSection)` 
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 560px; //560
`


const Submit = styled.div` 
    margin-top: 2rem;
    width: 160px;
`

export const ContactForm = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            // ...testValues,
        },
        onSubmit: values => handleSubmit(values),
    });

    const handleSubmit = (values) => {
        const mail = composeMail(values)
        console.log(mail)
        
        firebase.firestore().collection('mail').add(mail)
        .then(() => {
            formik.resetForm({})
            dispatch(openSnackbar({type: 'success', message: 'Message Sent'}))
        })
        .catch((error) => {
            formik.setSubmitting(false)
            dispatch(openSnackbar({type: 'error', message: 'Error Sending Message'}))
        })
    }

    const margin='normal'

    return(
        <Wrap>
        <h1>Contact</h1>
        <form onSubmit={formik.handleSubmit} >
            <FormWrap>

                <MyFormikField
                    name='email'
                    label='Email'
                    required
                    formik={formik}
                    margin={margin}
                    type='email'
                    />
                
                <MyFormikField
                    name='message'
                    label='Message'
                    required
                    formik={formik}
                    margin={margin}
                    multiline
                    rows="10"
                />
                <Submit>
                    <MyBasicButton 
                        type="submit" 
                        variant="contained" 
                        text='Send'
                        endIcon={<SendIcon />}
                        loading={formik.isSubmitting}
                        fullWidth
                        disabled={!formik.dirty}
                    /> 
                </Submit>

            </FormWrap>

        </form>
        <MySnackBar />
        </Wrap>
    )
}

export default ContactForm

const testValues = {
    email: 'test@test.be',
    message: 'test',
}