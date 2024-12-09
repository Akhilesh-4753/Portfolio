import React from 'react'
import Layout from '../Layout/Layout'
import Homebanner from '../Layout/Homebanner'
import Homeabout from '../Layout/Homeabout'
import HomeProject from '../Layout/HomeProject'

const Home = () => {
  return (
    <Layout>
          <Homebanner/>
          <Homeabout/>
          <HomeProject/>
    </Layout>
  )
}

export default Home