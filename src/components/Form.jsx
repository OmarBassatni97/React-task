import React from 'react'

const Form = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <form className='flex flex-col gap-3'>
                <div>
                    <label>Name: </label>
                    <input required className='border border-gray' type="text" />
                </div>
                <div>
                    <label>Email: </label>
                    <input className='border border-gray' type="email" />
                </div>
                <div>
                    <label>Password: </label>
                    <input className='border border-gray' type="password" />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input className='border border-gray' type="password" />
                </div>

                <button type='submit' className='p-2 bg-slate-300'>Sign up</button>
            </form>
        </div>
    )
}

export default Form