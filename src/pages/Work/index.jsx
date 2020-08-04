import React from 'react'
import { Main } from './styles'
import { Card } from '../../components/Card'
import pokeguiaImg from '../../assets/images/pokeguia.png'
import kumpelImg from '../../assets/images/kumpel.png'
import countriesImg from '../../assets/images/countries.png'
import easybankImg from '../../assets/images/easybank.png'
import manageImg from '../../assets/images/managelanding.png'
import socialMediaImg from '../../assets/images/socialmedia.png'
import exchange from '../../assets/images/exchange.png'

export const Work = () => {
  return (
    <Main>
      <h2>MY WORK</h2>
      <ul>
        <li><Card title='pokeguia project' image={pokeguiaImg} link='https://www.youtube.com/watch?v=8sy8N-TmzPM&list=PLk4Q1VrB4bbc24Na7vyakwVzEUK4rzLYp&index=2&t=3s' /></li>
        <li><Card title='kumpel project' image={kumpelImg} link='https://www.youtube.com/watch?v=-iHEr1Ds1SE&list=PLk4Q1VrB4bbc24Na7vyakwVzEUK4rzLYp&index=2' /></li>
        <li><Card title='countries challenge' image={countriesImg} link='https://loving-dubinsky-9b7d47.netlify.app/' /></li>
        <li><Card title='easybank challenge' image={easybankImg} link='https://esteban-ladino.github.io/easybank-landing-page/' /></li>
        <li><Card title='Manage page challenge' image={manageImg} link='https://relaxed-borg-a653d7.netlify.app/' /></li>
        <li><Card title='social media challenge' image={socialMediaImg} link='https://esteban-ladino.github.io/social-media-dashboard/' /></li>
        <li><Card title='exchange page' image={exchange} link='https://esteban-exchange-project.netlify.app/' /></li>
      </ul>
    </Main>
  )
}
