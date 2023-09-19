import React from 'react'

interface StorePageProps{
  children:React.ReactNode
}

const StorePage:React.FC<StorePageProps> = ({
  children
}) => {
  return (
    <>
    {children}
    </>
  )
}

export default StorePage