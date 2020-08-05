import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
import 'firebase/firestore';
// import 'firebase/storage';
import { firebaseConfig, myEmail } from './privateConstants';



  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// const db = firebase.database();
const firestore = firebase.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

export { 
    // auth, 
    // db, 
    firestore, 
    // storage, 
};


export const sendMessage = (message) => 
  firestore.collection(`mail`).add({
    to: message.email,
    bcc: myEmail,
    message: {
      subject: 'Contact Pieter Van Eynde',
      text: `Dear Sir or Madam,

Following message was sent on my portfolio website :-) 

Email: ${message.email}
Message: ${message.message}

Thank you for your request. I will be in touch shortly.

Best Regards,

Pieter
`,
      // html: 'dit is een <code>test</code>'
    }
  })