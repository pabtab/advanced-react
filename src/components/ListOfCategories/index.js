import React, { useState, useEffect } from 'react'
import { FiLoader } from 'react-icons/fi'
import { Category } from '../Category'
import { Item, List } from './styles'

function useCategoriesDate () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server-pabtab.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setLoading(false)
        setCategories(response)
      })
  }, [])

  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesDate()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        categories.map(category => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
      }
    </List>
  )

  if (loading) {
    return <FiLoader />
  }

  return (
    <>
      {renderList()}
      { showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
