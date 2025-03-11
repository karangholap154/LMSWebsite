import React from 'react'

const Loading = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='w-16 border-4 border-t-4 border-gray-300 rounded-full border-t-blue-400 sm:w-20 aspect-square animate-spin'></div>
        </div>
    )
}

export default Loading