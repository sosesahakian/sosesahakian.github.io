import React from 'react'
import tw from 'tailwind-styled-components'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'





function SmallAbout() {

  return (
      <Container>
        <ParallaxProvider>
            <Parallax translateX={[-100, 50]}>
                <AboutMeTitle>ABOUT ME</AboutMeTitle>
            </Parallax>
            <AboutMeDescription>
                Whats up my homies. This is my about me description text. You gonna get all the details about me here yeah yeah
            </AboutMeDescription>
        </ParallaxProvider>

      </Container>
  )
}

export default SmallAbout

const Container = tw.div`
    h-[90vh] w-full flex flex-row flex-nowrap  justify-center items-center

`

const AboutMeTitle = tw.div`
 text-[190px] opacity-10 text-red-500 relative font-['AvenirHeavy] ease-out
`

const AboutMeDescription = tw.div`
   items-center font-['AvenirLight'] text-left ml-[35%] mr-[5%] text-sm sm:text-2xl md:text-4xl lg:text-7xl xl:text-4xl absolute
`

