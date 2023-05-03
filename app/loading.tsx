import Image from 'next/image'
import React from 'react'
import loadingsvg from '/loading.svg'

const Loading = () => {
  return (
    <div className=' h-screen w-Screen flex flex-col justify-center content-center items-center'>
        <Image src={loadingsvg} width={100} height={100} alt='loading' />
        <h1 className='text-center text-[#130f25] text-2xl font-bold'>Loading...</h1>
    </div>
  )
}

export default Loading