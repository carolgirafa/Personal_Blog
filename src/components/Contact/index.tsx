import {
  IntroContainer,
  LinkSectionContainer,
  ContactContainer,
} from './styles'

import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
  Planet,
} from 'phosphor-react'

export function Contact() {
  return (
    <ContactContainer>
      <IntroContainer>
        <Planet size={45} />
        <strong>Hello World!</strong>
        <p>Welcome to my portfolio website!</p>
        <p>
          I am a Software Engineer with a strong background in data analysis and
          product development.
        </p>
        <p>
          I am always seeking new challenges and opportunities to learn and
          grow, and I am looking forward to connecting with you. Thank you for
          visiting!
        </p>
      </IntroContainer>
      <LinkSectionContainer>
        <a
          href="https://wa.me/393664304690?text=Hello,%20I'm%20contacting%20you%20from%20your%20website"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsappLogo size={30} />
          <span>Lets chat</span>
        </a>
        <a href="mailto:carol.girafa@gmail.com">
          <EnvelopeSimple size={30} />
          <span>Write to me</span>
        </a>
        <a
          href="https://github.com/carolgirafa"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo size={30} />
          <span>Check my repos</span>
        </a>
        <a
          href="https://www.linkedin.com/in/carolinagirafa/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinLogo size={30} />
          <span>Lets connect</span>
        </a>
      </LinkSectionContainer>
    </ContactContainer>
  )
}
