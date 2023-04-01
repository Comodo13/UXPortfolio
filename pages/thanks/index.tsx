import { NextPage } from 'next'
import React from 'react'
import SimpleLayout from '../../components/Specials/SimpleLayout'
import Head from 'next/head'

const Thanks: NextPage = () => {
  return (
    <>
      <Head>
        <title>You’re subscribed </title>
        <meta name="description" content="Thanks for subscribing to my newsletter." />
      </Head>
      <SimpleLayout
        title="Thanks for order."
        intro="I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
      />
    </>
  )
}

export default Thanks
