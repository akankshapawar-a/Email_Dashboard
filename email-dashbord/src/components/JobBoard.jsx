import React from 'react';

const JobBoard= () => {
  return (

    <div className=' bg-gray-700 text-center h-screen '>
           <h1 className='text-2xl font-bold pt-20'>Job Posting Form </h1>

           <div className='bg-gray-500 mx-36 py-12 mt-4 rounded-full '>

      <form className=''>
        <div className='mt-4'>
        <input type="text" placeholder='Job Title' className='py-2 w-1/2  rounded-lg placeholder:text-center'/>
        </div>
        <div className='mt-4'>
        <input type='text' placeholder='Job Description' className='py-2 w-1/2  rounded-lg placeholder:text-center'/>
        </div>
        <div className='mt-4'>
        <input type='text' placeholder='Exprence Level'className='py-2 w-1/2  rounded-lg placeholder:text-center'/>
        </div>
        <div className='mt-4'>
        <input type='email' placeholder='Candadiate email' className='py-2 w-1/2  rounded-lg placeholder:text-center'/>
        </div>
        <div className='mt-4'>
        <input type='text' placeholder='Add End date'className='py-2 w-1/2  rounded-lg placeholder:text-center'/>
        </div>
<div className='mt-4'>
    <button type='submit' className='py-3 w-1/5  rounded-lg  bg-blue-700'>Submit</button>
</div>
      </form>
      </div>
    </div>
  )
}

export default JobBoard
