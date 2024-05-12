import React from 'react';

const Forms = () => {
    return (
        <div>
            <form action="#" className='p-2.5 w-1/3 h-1/3 border-r-10px m-auto mt-20 bg-gray-300 rounded-lg flex flex-col items-center gap-y-2.5'>
                <h1 className='text-3xl text-green-600 font-bold text-center'>Register</h1>
                <div className='flex items-center gap-x-2.5 w-1/2'>
                    <label htmlFor="name" className='font-bold'>Name:</label>
                    <input type="text" id='name' className='w-full bg-gray-200 rounded-lg h-12' />
                </div>
                <div className='flex gap-x-2.5 w-1/2'>
                    <label htmlFor="email" className='font-bold'>Email:</label>
                    <input type="text" id='email' className='w-full bg-gray-200 rounded-lg h-12' />
                </div>
                <button className='w-1/3 h-10 bg-green-600 rounded-2xl text-white font-bold'>Submit</button>
            </form>
        </div>
    );
}

export default Forms;
