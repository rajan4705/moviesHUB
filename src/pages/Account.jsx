import React from 'react'
import SavedShows from '../components/SavedShows'
const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
      <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/ce221d7a-8901-41d9-b726-3ea2efe3a650/2f69dcef-463f-44da-b3b9-662b65f33f82/IN-en-20230703-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='/'/>
      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px] '></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
      </div>
    </div>
    <SavedShows/>
    </>
  )
}

export default Account