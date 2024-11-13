import React from 'react'

const Signin = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className=" h-1/2 w-1/4">
            <p className='text-center'>Sign-In</p>
            <div>
                <p>E-Mail</p>
                <input type="text" id='email-signin'/>
                <p>Password</p>
                <input type="text" id='password-signin'/>
            </div>
        </div>
    </div>
  )
}

export default Signin