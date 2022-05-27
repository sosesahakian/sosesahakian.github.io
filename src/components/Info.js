import React from 'react'
import tw from 'tailwind-styled-components'


function Info() {
  return (
    <Container>
        <Name>Sose Sahakian</Name>
        <Title>Fullstack Developer & Web Developer</Title>
    </Container>
  )
}

export default Info

const Container = tw.section`
    flex flex-col flex-nowrap justify-center items-center h-[90vh] w-[90%] bg-white
`

const Name = tw.div`
    font-['Valencia'] text-center pr-[10px] text-[50px] sm:text-7xl md:text-8xl lg:text-[160px] animate-in slide-in-from-top-60 duration-1000 
`

const Title = tw.div`
font-['AvenirRoman'] text-center mt-[10px] sm:text-base md:text-lg lg:text-4xl animate-in slide-in-from-bottom-80 duration-1000
`