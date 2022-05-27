import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import VoistrapImages from './ParallaxImages/VoistrapImages';
import WhatsMyFoodImages from './ParallaxImages/WhatsMyFoodImages';
import ComingOrNotImages from './ParallaxImages/ComingOrNotImages';
import TeslaImages from './ParallaxImages/TeslaImages';
import KosenImages from './ParallaxImages/KosenImages';
import VoistrapWebImages from './ParallaxImages/VoistrapWebImages';
import InstaIpad from '../insta-ipad.PNG'
import InstaIphone from '../blaf.PNG'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import UberIphone from '../uber-iphone.PNG'
import UberIpad from '../uber-ipad.PNG'
import tw from 'tailwind-styled-components'

const ImageContainer = styled.div`
margin-left:50%;
width:50%;
height:700vh;
display: flex;
flex-flow: column nowrap;
`;

const ImageBox = styled.div`
margin-top:40vh;
height: 100vh;
position: relative;
`;

class ImageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: 0,
      scrollHeight: 0,
      scrollPercent: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ scrollHeight: Math.round(window.document.documentElement.scrollHeight) });
    this.setState({ screenHeight: Math.round(window.document.documentElement.clientHeight) });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { body, documentElement } = window.document;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    const sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const minlimit = (documentElement.clientHeight * 100) / documentElement.scrollHeight;
    const maxlimit = (documentElement.clientHeight * 1040) / documentElement.scrollHeight;
    if (sp >= minlimit && sp <= maxlimit) {
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { scrollPercent, scrollHeight, screenHeight } = this.state;
    const { pageSplitTimes } = this.props;
    const boxHeight = pageSplitTimes * 100;
    return (
      <ImageContainer>
        <ImageBox height={boxHeight}>
        <ParallaxProvider>
            <Parallax className=' flex space-x-2'>
              <img src={InstaIphone} className='absolute'/>
              <img src={InstaIphone} className='absolute right-0'/>
            </Parallax>
          </ParallaxProvider>
        </ImageBox>
        <ImageBox height={boxHeight}>
          <ParallaxProvider>
              <Parallax>
                <img src={UberIphone} className='absolute'/>
                <img src={UberIpad} className='absolute right-6'/>
              </Parallax>
            </ParallaxProvider>
        </ImageBox>
        <ImageBox height={boxHeight} className=''>
          <ParallaxProvider>
            <Parallax>
              <img src={InstaIphone} className='absolute'/>
              <img src={InstaIphone} className='absolute'/>
            </Parallax>
          </ParallaxProvider>
        </ImageBox>
        <ImageBox height={boxHeight} className=''>
          <ParallaxProvider>
              <Parallax>
                <img src={UberIphone} className='absolute'/>
                <img src={UberIpad} className='absolute right-6'/>
              </Parallax>
            </ParallaxProvider>
        </ImageBox>
        <ImageBox height={boxHeight}>
        <ParallaxProvider>
            <Parallax className=' flex space-x-2'>
              <img src={InstaIphone} className='absolute'/>
              <img src={InstaIphone} className='absolute right-0'/>
            </Parallax>
          </ParallaxProvider>
        </ImageBox>
      </ImageContainer>
    );
  }
}

ImageContent.propTypes = {
  pageSplitTimes: PropTypes.number.isRequired,
};

export default ImageContent;
