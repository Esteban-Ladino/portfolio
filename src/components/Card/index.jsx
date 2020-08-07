import React from 'react'
import { Article } from './styles'
import pokeguiaImg from '../../assets/images/pokeguia.png'

export const Card = (props) => {
  const {
    title = 'Kumpel',
    description = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet',
    image = pokeguiaImg,
    link = 'about:blank'
  } = props

  return (
    <Article>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <figure>
          <img src={image} alt={`${title} preview`} />
        </figure>
      </a>
      <h2>{title}</h2>
      <p>{description}</p>
    </Article>
  )
}
