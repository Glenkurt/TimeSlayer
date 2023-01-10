import React from 'react'
import { Link } from 'react-router-dom'
import ButtonSession from '../Componnents/buttonSession'

const HomePage = () => {
  return (
      
          <div className="container  mx-auto px-6 py-8">
  <h1 className="text-4xl text-brand  text-center font-bold text-gray-800 mb-6">Welcome to TimeSlayer!</h1>
 <p>TimeSlayer is a time management tool that uses Pomodoro techniques to help you increase productivity and achieve your goals.</p>
          <Link to="/pomodoro"><ButtonSession name="Try it now" /></Link>
          </div>

  )
}

export default HomePage