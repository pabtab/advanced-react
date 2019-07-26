import React from 'react'
import { Image, Grid, Link } from './styles'

export const ListOfFavs = ({ favs = [] }) => {
  return <Grid>
    {
      favs.map(fav => (
        <Link to={`/detail/${fav.id}`}>
          <Image key={fav.id} src={fav.src} />
        </Link>
      ))
    }
  </Grid>
}
