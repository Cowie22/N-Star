import React from 'react';
import styled from 'styled-components';

class Places extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() { 
      return (
        this.props.info[0] ?
        <DisplayStyleSpan
          isClicked={Boolean(this.props.info[0].id > 0)}
          >
            <NameDiv
            isClicked={Boolean(this.props.info[0].id > 0)}
            >
              Name:  {this.props.info[0].name}
            </NameDiv>
            <DescriptionDiv
            isClicked={Boolean(this.props.info[0].id > 0)}
            >
              Amenities:  {this.props.info[0].description}
            </DescriptionDiv>
            <OpenDiv
            isClicked={Boolean(this.props.info[0].id > 0)}
            >
              OPENS:   {this.props.info[0].open_time}
            </OpenDiv>
            <ClosedDiv
            isClicked={Boolean(this.props.info[0].id > 0)}
            >
              CLOSES:   {this.props.info[0].close_time}
            </ClosedDiv>
        </DisplayStyleSpan>
        :
        <div></div>
      )
  }
}

export default Places;

const DisplayStyleSpan = styled.span`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 73%;
  right: 19%;
  z-index: 1;
  background: rgb(247, 246, 242, 0.7);
  justify-content: space-around;
  visibility: ${props => (props.isClicked ? 'visible' : 'hidden')};
  font-size: 14px;
  font-weight: 800;
`;

const NameDiv = styled.div`
  color: #3daaff;
  visibility: ${props => (props.isClicked ? 'visible' : 'hidden')};
  cursor: pointer;
`;

const DescriptionDiv = styled.div`
  color: black;
  visibility: ${props => (props.isClicked ? 'visible' : 'hidden')};
  cursor: pointer;
`;

const OpenDiv = styled.div`
  color: #28a833;
  visibility: ${props => (props.isClicked ? 'visible' : 'hidden')};
  cursor: pointer;
`;

const ClosedDiv = styled.div`
  color: #aa1111;
  visibility: ${props => (props.isClicked ? 'visible' : 'hidden')};
  cursor: pointer;
`;