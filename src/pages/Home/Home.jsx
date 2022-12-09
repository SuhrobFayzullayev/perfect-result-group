import React from 'react'
import Name from '../../components/ComponentName'
import Contact from '../../components/Contacts'
import HomePortfolio from '../../components/Portfolio/homePortfolio'

const Home = () => {
  return (
    <>
    <HomePortfolio/>
    <Name name={"Contact"}/>
    <Contact/>
    </>
  )
}

export default Home