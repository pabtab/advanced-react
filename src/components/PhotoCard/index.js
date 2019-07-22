import React, { useEffect, useRef, useState } from 'react'
import { Button, ImgWrapper, Img, Article } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAUL_IMG = 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAUL_IMG }) => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(function () {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      console.log(isIntersecting)

      if (isIntersecting) {
        console.log('si')
        setShow(true)
        observer.disconnect()
      }
    })

    observer.observe(ref.current)
  }, [ref])

  return (
    <Article ref={ref}>
      {
        show &&
          (<>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>

            <Button>
              <MdFavoriteBorder size='32px' /> {likes} likes!
            </Button>
          </>)
      }
    </Article>
  )
}
