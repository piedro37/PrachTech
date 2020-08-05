import React from 'react'
import { colors } from 'resources/constants'
import Divider from 'components/Divider'
import { Element } from 'react-scroll'
import { Button } from 'components/Button'
import { RiMailSendLine } from 'react-icons/ri'
import { Wrapper, Title, Description } from 'app/techStack/techStackStyles'
import { Formik } from 'formik'
import { Form } from 'react-bootstrap'
import styled from 'styled-components';
import { sendMessage } from 'resources/firebase'

const MyForm = styled(Form)`
    margin-top: 10px;
    width: 400px;
    display: grid;
    grid-template-rows: 70px 200px;
`


export const Contact = () => {
    return (
        <Wrapper>
            <Element name='contact' />
            <Title> Contact </Title>
            <Divider color={colors.secondary} />
            <Description>Have a question? Shoot! I won't bite, I promise <span role='img' aria-label='emoji'>😁</span></Description> 
            <Formik
                initialValues={{ email: '', message: '' }}
                validate={values => { //TODO = integrate Yup
                    const errors = {};
                    if (!values.email) {
                      errors.email = 'Required';
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                      errors.email = 'Invalid email address';
                    }
                    if(!values.message) errors.message = 'Required';
                    return errors;
                  }}
                onSubmit={(values, { setSubmitting }) => {
                        
                    sendMessage(values) //mail
                    .then(()=>{
                        setSubmitting(false)
                        alert('Thank you for your request :-) I will be in touch shortly.') //Todo = verbeteren
                    }
                    )
                    .catch(error => {
                        alert(error)
                    });

                    
                }}
            >
                {({ isSubmitting, values, handleChange, touched, errors, handleSubmit, dirty, setFieldTouched }) => {
                    // console.log('for debugging')
                    return(
                    <MyForm noValidate onSubmit={handleSubmit}>
                        <Form.Group >
                            <Form.Control
                                type="email"
                                placeholder='Your Email'
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={()=>setFieldTouched('email')}
                                isInvalid={touched.email && errors.email}
                                isValid={dirty && !errors.email}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group >
                            <Form.Control
                                name="message"
                                placeholder='Your Message'
                                as="textarea"
                                rows="7"
                                required
                                value={values.message}
                                onChange={handleChange}
                                onBlur={()=>setFieldTouched('email')}
                                isInvalid={touched.message && errors.message}
                                isValid={dirty && !errors.message}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>

                        </Form.Group>
                        
                       
                    
                    <Button 
                        type='submit'
                        icon={<RiMailSendLine size={20}/>}
                        text='Send'
                    />

                    </MyForm>
                )}}

                
            </Formik>



        </Wrapper>
    )
}

export default Contact



