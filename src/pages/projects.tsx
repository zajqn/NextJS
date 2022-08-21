import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/home/Header'
import Title from '../components/home/Title'

const Projects:NextPage = () => {
  return (
    <>
      <Header path={'/projects'} />
      <Head>
        <title>My Project Page Nextjs</title>
      </Head>
      <Title title={"My Project page"}/>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              <div className='m-5'>
              My Project page
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Projects