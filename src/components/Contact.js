import React from 'react'
import tw from 'tailwind-styled-components'
import githubImg from '../Images/Social/git.svg'
import mailImg from '../Images/Social/mail.svg'
import linkedInImg from '../Images/Social/linkedin.svg'
import instaImg from '../Images/Social/insta.svg'
import SocialLogo from './SocialLogo'
import { ParallaxProvider, Parallax} from 'react-scroll-parallax'

function Contact() {
  return (
    <Container>
          <ParallaxProvider>
            <Parallax translateX={[-100, 50]}>
              <ContactTitle>CONTACT</ContactTitle>
            </Parallax>
        </ParallaxProvider>
        <SocialMediaIcons>
            <SocialLogo imgURL={githubImg} alternate="github" redirectURL="https://github.com/sosesahakian" />
            <SocialLogo imgURL={mailImg} alternate="mail" redirectURL="mailto:sose94@gmail.com" />
            <SocialLogo imgURL={instaImg} alternate="insta" redirectURL="https://www.instagram.com/sosejaaan/" />
            <SocialLogo imgURL={linkedInImg} alternate="linkedin" redirectURL="https://www.linkedin.com/in/sose-sahakian" />
        </SocialMediaIcons>
  </Container>
  )
}

export default Contact

const Container = tw.section`
sm:mt-[20vh] sm:h-[100vh] w-full sm:flex sm:flex-col sm:flex-wrap sm:pl-[60px] lg:mb-[90px] lg:pl-[90px] xl:pl-[120px] xl:mb-[120px]
`

const ContactTitle = tw.div`
 font-['AvenirHeavy'] text-[190px] opacity-20
`
const SocialMediaIcons = tw.div`
  z-1 flex ml-[20%] mr-[3%] translate-x-[210%] flex-wrap justify-around
`