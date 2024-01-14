'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const Login = () => {
  const router = useRouter()
  const [error, setError] = useState('')

  const { data: session, status: sessionStatus } = useSession()

  useEffect(() => {
    if (sessionStatus === 'authenticated') {
      router.replace('/dashboard')
    }
  }, [sessionStatus, router])

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    if (!isValidEmail(email)) {
      setError('Email is invalid')
      return
    }

    if (!password || password.length < 8) {
      setError('Password is invalid')
      return
    }

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })

    if (res?.error) {
      setError('Invalid email or password')
      if (res?.url) router.replace('/dashboard')
    } else {
      setError('')
    }
  }

  if (sessionStatus === 'loading') {
    return <h1 className='text-center mt-4'>Loading...</h1>
  }

  return (
    sessionStatus !== 'authenticated' && (
      <div className='flex h-full flex-col items-center justify-center p-12'>
        <div className='p-8 rounded border-2 w-[375px]'>
          <h1 className='text-4xl text-center font-semibold mb-8'>Login</h1>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-4'
          >
            <Input
              type='text'
              placeholder='Email'
              required
            />
            <Input
              type='password'
              placeholder='Password'
              required
            />
            <Button
              type='submit'
              className=''
            >
              {' '}
              Sign In
            </Button>
            <p className='text-red-600 text-[16px] mb-4'>{error && error}</p>
          </form>
          <Button
            className='w-full  py-2 rounded hover:bg-gray-800'
            onClick={() => {
              signIn('github')
            }}
          >
            Sign In with Github
          </Button>
          <div className='text-center   mt-4'>- OR -</div>
          <Link
            className='block text-center   hover:underline mt-2'
            href='/register'
          >
            Register Here
          </Link>
        </div>
      </div>
    )
  )
}

export default Login
