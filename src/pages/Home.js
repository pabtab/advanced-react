import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

export const Home = ({ id }) => {
  return (
    <>
      <Layout title='Home' />
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}
