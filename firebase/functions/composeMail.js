
const composeMail = (props) => {
    const now = Date.now()

    const mail = {
        timestamp: now,
        to: props.email,
        bcc: 'pieter@prach.tech',
        message: {
          subject: 'Contact Pieter Van Eynde',
          text: 
`Dear Sir or Madam,
    
Following message was sent on my portfolio website :-) 

Email: ${props.email}
Message: ${props.message}

Thank you for your request. I will be in touch shortly.

Best Regards,

Pieter
`,
}
}
return mail
}

export default composeMail
