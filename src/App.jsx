import React from 'react'
import './Reset.scss'
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Videos from './components/Videos/Videos'

const App = () => {
  return (
    <>
      <div className="head">
        <Header />
        <Hero />
      </div>

      <Videos />


    </>
  )
}

export default App