import React from 'react'

const Login= () => {
  return (

    <div className=' bg-gray-700 text-center h-screen '>
           <h1 className='text-2xl font-bold pt-20'>Login Here </h1>

           <div className='bg-gray-500 mx-36 py-20 mt-4 rounded-full '>

      <form className=''>
        <div className='mt-4'>
        <input type='email' placeholder='Enter Email' className='py-2 w-1/2  rounded-lg placeholder:text-center'/>
        </div>
       
        <div className='mt-4'>
        <input type='password' placeholder='Enter Password' className='py-2 w-1/2  rounded-lg placeholder:text-center'/>
        </div>
<div className='mt-4'>
    <button type='submit' className='py-3 w-1/5  rounded-lg  bg-blue-700'>Login</button>
</div>
      </form>
      </div>
    </div>
  )
}

export default Login
