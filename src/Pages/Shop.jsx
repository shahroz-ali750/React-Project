import React from 'react'
import { Banner } from '../components/Banner/Banner'
import { Popular } from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'

export const Shop = () => {
  return (
    <div>
      <Banner/>
      <Popular/>
      <Offers />
    </div>
  )
}
