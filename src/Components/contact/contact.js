import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { Button, Label, Form, Input, TextArea } from 'semantic-ui-react';
// import Formsy from 'formsy-react'
import { Form, Input, TextArea } from 'formsy-semantic-ui-react';
import { Button, Label } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import './contact.css';

const serviceId = "service_rs9qu66";
const templateId = "template_i6boyhs";
const userId = "7BtXRg6JXp2vewsDb";


export default function Contact(){
    const ref = useRef(null);
    const errorLabel = <Label color="red" pointing/>

  const handleOnSubmit = (e) => {
    // e.preventDefault();
    
      emailjs.sendForm(serviceId, templateId, "#contactForm", userId)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    document.getElementById("contactForm").reset();
  };



//   function handleClick() {

//   }

    return (
        <div>
            <p className='contactTitle'>Contact Me</p>
        <Form onValidSubmit={handleOnSubmit} className='contactForm' id="contactForm" ref={ref}>
                <Form.Field
                    id='form-input-control-fromName'
                    control={Input}
                    label='Name'
                    name='fromName'
                    type='text'
                    placeholder='Name…'
                    icon='user circle'
                    iconPosition='left'
                    validations="isWords"
                    validationErrors={{ isWords: 'Name is not valid' }}
                    errorLabel={errorLabel}
                    required
                    
                />
                <Form.Field
                    id='form-input-control-email'
                    control={Input}
                    label='Email'
                    name='replyTo'
                    type='email'
                    placeholder='Email…'
                    icon='mail'
                    iconPosition='left'
                    validations="isEmail"
                    validationErrors={{ isEmail: 'Email not valid' }}
                    errorLabel={errorLabel}
                    required
                />
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Message'
                    name='message'
                    type='message'
                    placeholder='Message…'
                    validations="isExisty"
                    validationErrors={{ isExisty: 'Please enter a message' }}
                    errorLabel={errorLabel}
                    required
                />
                <Button type='submit' color='blue'>Submit</Button>
            </Form>
        </div>
    );
}