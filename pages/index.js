import React from 'react'
import Head from 'next/head'
import { HeaderTab } from '../src/components/HeaderTab'
import Nav from '../src/components/Nav'
import Counter from '../src/components/Counter'
import { Hero, Title, Description, Row } from '../src/styles/Home'

const Home = () => {
  return (
    <div>
      <Head>
        <HeaderTab name='Home' icon='cartoon' />
      </Head>

      <Nav />

      <Hero>
        <Title>Welcome to Next-init!</Title>
        <Description>
          To get started, edit <code>pages/index.js</code> and save to reload.
        </Description>

        <Row>
          <Counter />
        </Row>
      </Hero>
    </div>
  )
}

export default Home
