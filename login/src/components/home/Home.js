import React from 'react'
import "./home.css"

const Home = ({updateUser}) => {
  return (
    <div className='home'>
        <h1 >Welcome to Home Page</h1>
        <button className='button' onClick={() => updateUser({})}>Logout</button>
    </div>
  )
}

export default Home