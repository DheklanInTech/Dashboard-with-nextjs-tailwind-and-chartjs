import React from 'react'

const Header = ({title,subtitle}) => {
  return (
    <div className='flex justify-between p-4 pt-4'>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
    </div>
  )
}

export default Header