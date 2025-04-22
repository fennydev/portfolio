import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Home, User, Book } from 'lucide-react'



const Sidebar = () => {
    return (
        <aside>
            <div id="sidebar" className="bg-gray-800 text-white">
                <div id="sidebar-header" className='text-center text-2xl font-bold'>
                    <h1 className=''>Portfolio</h1>
                </div>
                <div id="sidebar-body" className=''>
                    <ul className='flex flex-col items-center justify-center'>
                        <li className='flex items-center justify-center p-4 hover:bg-gray-700 cursor-pointer'>
                            <Home className='mr-2' /> Home
                        </li>
                        <li className='flex items-center justify-center p-4 hover:bg-gray-700 cursor-pointer'>
                            <User className='mr-2' /> About
                        </li>
                        <li className='flex items-center justify-center p-4 hover:bg-gray-700 cursor-pointer'>
                            <Book className='mr-2' /> Project
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar