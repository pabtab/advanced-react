import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const LIKE_PHOTO = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
  likeAnonymousPhoto(input: $input) {
    id,
    likes,
    liked
  }
}
`

export const ToggleLikeMutation = ({ children }) => {
  return <Mutation mutation={LIKE_PHOTO}>
    {children}
  </Mutation>
}
