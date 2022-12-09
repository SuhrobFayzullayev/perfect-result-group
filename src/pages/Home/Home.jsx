import React from 'react'
import Name from '../../components/ComponentName'
import Portfolio from '../../components/Portfolio/portfolio'
import Contact from '../../components/Contacts'

const Home = () => {
  return (
    <>
    <Name name={"hello"}/>
    <Portfolio/>
    <Name name={"Contact"}/>
    <Contact/>
    </>
  )
}

export default Home