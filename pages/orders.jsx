import React, { useState } from 'react'
import {BsThreeDotsVertical} from "react-icons/bs";
import { data } from '@/data/data';
import Header from '@/components/Header';
import { FaShoppingBag } from 'react-icons/fa';

const orders = () => {
    const [status,setStatus] = useState("")
    useEffect(() => {
   const orderStatus =   data.map((order) => {
      setStatus(order.status.toString())
    })
    }, [])


    
  return (
    <div className='bg-gray-100 min-h-screen'>
        <Header
        title="Orders"
        subtitle="Welcome Back"
        />
    <div className='p-4'>

      <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
        <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Order</span>
            <span className='sm:text-left text-right'>Status</span>
            <span className='hidden md:grid'>Last Order</span>
            <span className='hidden sm:grid'>Method</span>
        </div>
        <ul>
            {data.map((order,id)=> (
                <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg p-2 my-3 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                   <div className='flex'>
                        <div className='bg-green-100 p-3 rounded-lg'>
                            <FaShoppingBag className='text-green-800'/>
                        </div>
                        <div className='pl-4'>
                        <p className='text-gray-800 font-bold'>${order.total.toLocaleString()}</p>
                         <p className='text-gray-800 text-sm' >{order.name.first + " " + order.name.last}</p>
                        </div>
                   </div>
                   <p className='text-gray-600 sm:text-left text-right'>
                      <span className=''>{order.status}</span>
                   </p>
                </li>
                ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default orders