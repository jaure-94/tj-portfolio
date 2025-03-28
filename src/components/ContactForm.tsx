'use client'

import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { useEffect, useState } from 'react'
import Reveal from '@/animations/Reveal'

interface FormValues {
  username: string
  email: string
  message: string
}

const ContactForm = () => {
  const form = useForm<FormValues>()
  const { register, control, handleSubmit, formState, reset } = form
  const { errors, isSubmitting, isSubmitSuccessful } = formState
  const [ successMessage, setSuccessMessage ] = useState<boolean>(false)

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
      setSuccessMessage(true)
      setTimeout(() => {
        setSuccessMessage(false)
      }, 5000)
    }
  }, [isSubmitSuccessful, setSuccessMessage, reset])

  const onSubmit = (data: FormValues) => {
    console.log('form submitted', data)
  }

  return (
    <div className='flex items-stretch'>
      <form
        className='flex flex-col w-full gap-6'
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        >
        <Reveal>
        <div className='flex flex-col gap-5 md:flex-row md:justify-between'>
          <div className='flex flex-col w-full gap-2'>
              <label htmlFor="username">Username</label>
              <input
                placeholder='John Doe'
                className='form-input'
                type="text"
                id="username"
                {...register('username', {
                  required: "*Username is required"
                })}
              />
            <p className='text-red-500 text-sm'>{errors.username?.message}</p>
          </div>
        
          <div className='flex flex-col w-full gap-2'>
              <label htmlFor="email">Email</label>
            <input
              placeholder='john@example.com'
              className='form-input'
              type="email"
              id="email"
              {...register('email', {
                required: "*Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "*Invalid email format"
                }
              })}
            />
            <p className='text-red-500 text-sm'>{errors.email?.message}</p>
          </div>
        </div>
        </Reveal>
        
        <Reveal>
          <div className='flex flex-col gap-2'>
            <label htmlFor="mutupo">Message</label>
            <input
              placeholder='Type your message here...'
              className='textarea'
              type="text"
              id="message"
              {...register('message', {
                required: "*Message is required"
              })}
            />
            <p className='text-red-500 text-sm'>{errors.message?.message}</p>
          </div>
        </Reveal>

        <Reveal>
          <button
            className='px-4 py-3 w-64 rounded-md text-white bg-stone-900 hover:bg-stone-700 transition-all duration-200'
            type="submit"
            disabled={ isSubmitting }
            >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </Reveal>

        {successMessage && (<div className='px-14 py-8 rounded-md bg-green-300'>
          Message successfully sent! We&apos;ll reach out soon...
        </div>)}
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default ContactForm