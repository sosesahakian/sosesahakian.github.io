import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import tw from 'tailwind-styled-components'
import styled from '../styled.png'
import fire from '../firebase.webp'
import css from '../css.webp'
import twcss from '../tailwind.png'
import react from '../react.png'
import next from '../next.png'
import js from '../js.png'
import html from '../html.webp'
import ang from '../angular.png'
import java from '../java.jpg'

function Skills() {
  return (
    <div className=' h-[100vh] w-full flex flex-row flex-nowrap'>
        <SkillsList className='flex space-x-10 ml-[300px]'>
            <div className='mx-4'>
                <img src={styled} alt='' className='w-[60px] h-[50px] rounded-full bg-gray-50 object-cover'/>
                heyoo
            </div>
            <div className='mx-4'>
                <img src={fire} alt='' className='rounded-full w-[60px] h-[50px] bg-gray-50 object-cover '/>
                heyoo
            </div>
            <div className='mx-4'>
                <img src={css} alt='' className='rounded-full w-[60px] h-[50px] bg-gray-50 object-cover'/>
                heyoo
            </div>
            <div className='mx-4'>
                <img src={twcss} alt='' className='rounded-full w-[60px] h-[50px] bg-gray-50 object-cover '/>
                heyoo
            </div>
            <div className='mx-4'>
                <img src={react} alt='' className='rounded-full w-[60px] h-[50px] bg-gray-50 object-cover'/>
                heyoo
            </div>
            <div className='mx-4'>
                <img src={next} alt='' className='rounded-full w-[60px] h-[50px] bg-gray-50 object-cover'/>
                heyoo
            </div>
            <div className='mx-6'>
                <img src={js} alt='' className='rounded-full w-[60px] h-[50px] bg-gray-50 object-cover'/>
                heyoo
            </div>
            <div className='mx-6'>
                <img src={html} alt='' className='rounded-full w-[60px] h-[50px] bg-gray-50 object-cover'/>
                heyoo
            </div>
            <div className='mx-6'>
                <img src={ang} alt='' className='rounded-full w-[60px] h-[50px] bg-gray-50 object-cover'/>
                heyoo
            </div>
            <div className='mx-4'>
                <img src={java} alt='' className='rounded-full w-[50px] h-[50px] bg-gray-50 object-cover'/>
                heyoo
            </div>
            <div className=' w-full'></div>
        </SkillsList>
        <ParallaxProvider className=''>
            <Parallax translateX={[20, -100]} className='relative -bottom-[300px]'>
                <SkillsTitle>SKILLS</SkillsTitle>
            </Parallax>
        </ParallaxProvider>
    </div>
  )
}

export default Skills

const SkillsTitle = tw.div`
font-['AvenirHeavy'] text-[190px] opacity-20 text-red-400 
`

const SkillsList = tw.div`
`