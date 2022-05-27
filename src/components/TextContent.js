import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const TextContainer = styled.section`
position: fixed;
top:0;
left:0;
display: flex;
flex-flow: column nowrap;
height:100vh;
width: 50%;
`;

const ProjectName = styled.div`
  font-family: 'AvenirHeavy';
  font-size: 120px;
`;

const ProjectDesc = styled.div`
  padding-top:2%;
  font-family: 'AvenirBook';
  font-size: 50px;
`;

const MyRole = styled.div`
  padding-top:5%;
  font-family: 'AvenirMedium';
  font-size: 50px;
`

const ProjectID = styled.div`
  font-family: 'AvenirHeavy';
  padding: 5%;
  font-size: 58px;
`

const ProjectType = styled.div`
  font-family: 'AvenirHeavy';
  font-size: 58px;

  padding: 5%;
`;

const ProjectDetails = styled.div`
display: flex;
flex-flow: column nowrap;
width: 100%;
padding: 5%;
padding-left:10%;
`;


const ProjectDetailsContainer = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
padding-top:5%;
height: 100%;
`;

const appearText = () => keyframes`
0%{
  color: #FFF;
}
100%{
  color: #333;
}
`;

const revBlock = () => keyframes`
0%{
    left: 0;
    width: 0%
}
50%{
    left:0%;
    width:100%
}
100%{
    left:100%;
    width:0%
}
`;


let BlockTextReveal = styled.span`
`;

const BlockTextRevealQuick = styled.span`
display:${props => (props.inline ? 'inline' : 'block')};
color: #FFF;
animation: ${appearText} 0.0001s linear forwards;
animation-delay: 0.5s;
position: relative;



&::after{
content:'';
top:0;
left:0;
position:absolute;
width:0%;
height:100%;
background: #222;
animation: ${revBlock} 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
animation-delay:0s;
}
`;

const BlockTextRevealNoAnim = styled.span`

`;

class TextContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshBlock: false,
    };
    this.refresh = this.refresh.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.refresh(nextProps);
  }

  refresh(nextProps) {
    const { refreshToggle } = nextProps;
    if (refreshToggle) {
      BlockTextReveal = BlockTextRevealNoAnim;
      this.setState({ refreshBlock: true },
        () => {
          BlockTextReveal = BlockTextRevealQuick;
          this.setState({ refreshBlock: false });
        });
    }
  }

  render() {
    const {
      number, projectName, projectDesc, roles, projectType, refreshToggle,
    } = this.props;
    return (
      <TextContainer>
        <ProjectID>
          <BlockTextReveal refreshToggle={refreshToggle} inline>
            {number}
          </BlockTextReveal>
        </ProjectID>
          <ProjectDetails>
            <ProjectName>
              <BlockTextReveal refreshToggle={refreshToggle} inline>
                {projectName}
              </BlockTextReveal>
            </ProjectName>
            <ProjectDesc>
              <BlockTextReveal refreshToggle={refreshToggle} inline={false}>
                {projectDesc}
              </BlockTextReveal>
            </ProjectDesc>
          </ProjectDetails>
      </TextContainer>
    );
  }
}

TextContent.propTypes = {
  number: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectDesc: PropTypes.string.isRequired,
  projectType: PropTypes.string.isRequired,
  roles: PropTypes.array.isRequired,
  refreshToggle: PropTypes.bool.isRequired,
};

export default TextContent;
