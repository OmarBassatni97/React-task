import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='h-20 bg-gray-500 flex items-center justify-center'>
            <div>
                <ul className='flex gap-3'>
                    <li><Link to='/'>Dashboard</Link></li>
                    <li><Link to='/registration'>Registration</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar