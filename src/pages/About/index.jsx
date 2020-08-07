import React from 'react'
import { Main, List, Download } from './styles'

export const About = () => {
  return (
    <Main>
      <h2>ABOUT</h2>
      <div>
        <h1>ESTEBAN LADINO</h1>
        <article>
          <h3>FRONTEND DEVELOPER</h3>
          <p>Hi there, I’m Esteban Ladino a Frontend Developer, I specialize in React apps, CSS and HTML. In addition, I work with CSS preprocessors like SASS. I am interested in building innovative interfaces which proved the best user experience possible. My professional life has been 100% driven by my passion for video-games and system engineering. I am aiming to become a full-stack developer in the near future.</p>
        </article>
        <List>
          <h3>SKILLS</h3>
          <li>
            <progress max='100' value='80' />
            <p>React</p>
          </li>
          <li>
            <progress max='100' value='70' />
            <p>JavaScript</p>
          </li>
          <li>
            <progress max='100' value='90' />
            <p>HTML/CSS</p>
          </li>
          <li>
            <progress max='100' value='85' />
            <p>Git/GitHub</p>
          </li>
          <li>
            <progress max='100' value='55' />
            <p>Scrum</p>
          </li>
        </List>
        <Download href='' download='resume.pdf'>DOWNLOAD MY RESUME</Download>
      </div>
    </Main>
  )
}
