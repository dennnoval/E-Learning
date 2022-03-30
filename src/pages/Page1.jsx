import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logo512px } from '../resources'

export default function Page1 () {
  const { value } = useSelector(state => state.counter)

  return (
    <div id='Page1'>
      <div className='text-center'>
        <h2>Title: Page1</h2>
        <img src={logo512px} height='128px'/>
        <p>Counter = {value}</p>
        <Link to='page2'>Page 2</Link>
        {' | | '}
        <Link to='page3'>Page 3</Link>
      </div>
    </div>
  )
}
