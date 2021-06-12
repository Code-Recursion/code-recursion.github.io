import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import '../styles/contact.css'

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xdolrenr')

  if (state.succeeded) {
    return (
      <div class='message'>
        <p> Thanks For Contacting, i will reach out you soon!</p>
      </div>
    )
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto border border-1 rounded p-md-5 p-4 m-0'>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  autoComplete='off'
                  autoFocus='on'
                  required='true'
                />
              </div>
              <div className='mb-3'>
                <input
                  id='email'
                  type='email'
                  name='email'
                  className='form-control'
                  placeholder='Email'
                  autoComplete='off'
                  required='true'
                />
                <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                />
              </div>
              <div className='mb-3'>
                <input
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                  autoComplete='off'
                  placeholder='Subject'
                  required='true'
                />
              </div>
              <div className='mb-3'>
                <textarea
                  id='message'
                  name='message'
                  className='form-control'
                  rows='3'
                  autoComplete='off'
                  placeholder='Message'
                  required='true'
                ></textarea>
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />
              </div>
              <div>
                <div className='container d-flex justify-content-center align-items-center'>
                  <button
                    type='submit'
                    className='btn_send text-center position-relative'
                    disabled={state.submitting}
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

const Contact = () => {
  return (
    <>
      <div className='m-0'>
        <h1 className='text-center'>Contact</h1>
      </div>
      <ContactForm />
    </>
  )
}

export default Contact
