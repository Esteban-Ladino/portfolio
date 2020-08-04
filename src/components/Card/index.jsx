import React from 'react'
import { Article } from './styles'
import pokeguiaImg from '../../assets/images/pokeguia.png'

export const Card = (props) => {
  const {
    title = 'Pokeguia Project',
    image = pokeguiaImg,
    link = 'about:blank'
  } = props

  return (
    <Article>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <h2>{title}</h2>
        <figure>
          <img src={image} alt={`${title} preview`} />
        </figure>
      </a>
    </Article>
  )
}
