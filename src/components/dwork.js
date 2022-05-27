import React from 'react'
import tw from 'tailwind-styled-components'
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import InstaImg from '../insta-ipad.PNG'
import III from '../blaf.PNG'
import Skills from './Skills';
const workList = [
    {
        number: "01",
        projectName: "Instagram",
        projectDesc: "bla bla bla bla",
        ImageOne: III,
        ImageTwo: III,
    },
    {
        number: "02",
        projectName: "WhatsApp",
        projectDesc: "dgdffhfd tsfj dtyh sftha",
        ImageOne: III,
        ImageTwo: III,
    },
    {
        number: "03",
        projectName: "Uber",
        projectDesc: "dfdfd hjhjh jkjkjk vbvbv erere ghghgh vbvbvb ssdsd",
        ImageOne: III,
        ImageTwo: III,
    }
]

function Work() {


  return (
      <div>
        <Container>
        {workList.map((project) => (
            <Project key={project.number}>
                <ProjectID>{project.number}</ProjectID>
                <AnimatedOnScroll animationIn="bounceInLeft" animationOut="fadeOut">
                    <ProjectInfoContainer>
                    <ParallaxProvider>
                        <Parallax translateY={[150, -200]} className=' w-[50%] flex absolute right-0'>

                            <img src={project.ImageOne} alt='' className='items-end w-[300px] h-[650px] flex'/>
                        </Parallax>

                        <Parallax speed={50} className='flex w-50% absolute items-end right-5 '>
                            <div className='right-2 items-end w-[300px] h-[650px] flex'> <img src={project.ImageTwo} alt=''/></div>
                        </Parallax>
                    </ParallaxProvider>
                        <ProjectInfo>
                            <ProjectName>{project.projectName}</ProjectName>
                            <ProjectDescription>{project.projectDesc}</ProjectDescription>
                        </ProjectInfo>
                    </ProjectInfoContainer>
                </AnimatedOnScroll>
            </Project>   
        ))}
        </Container>
        <Skills />
      </div>

  )
}

export default Work

const Container = tw.div`
   flex flex-col flex-nowrap h-[300vh] w-full
`

const Project = tw.div`
    h-[100vh] w-full
`

const ProjectInfo = tw.div`
flex flex-col flex-nowrap p-[5%] pl-[10%]
`

const ProjectID = tw.div`
font-['AvenirHeavy'] p-[5%] text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
`
const ProjectName = tw.div`
 animate-in slide-in-from-right-60 duration-500 font-['AvenirHeavy'] text-2xl sm:text-3xl md:text-5xl lg:text-[80px] xl:text-7xl
`

const ProjectDescription = tw.div`
animate-in slide-in-from-right-60 duration-500 p-[2%] font-['AvenirBook'] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
`

const ProjectInfoContainer = tw.div`
flex flex-col flex-nowrap items-center p-[5%] h-[100vh] w-[50%]
`
