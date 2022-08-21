import React from 'react'
import { HomeFilled } from '@ant-design/icons'

type Props = {
  title: String;
}

const Title = (props:Props) => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl tracking-tight font-bold text-gray-900">{props.title}</h1>
        </div>
      </header>
    </>
  )
}

export default Title