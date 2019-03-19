import React from 'react';
import styled from 'styled-components';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_favorite: 0,
      to_complete: 0,
      status: 1,
      vertical_feet: 0,
    };
    this.updateFavoriteRun = this.updateFavoriteRun.bind(this);
    this.handleFavoriteState = this.handleFavoriteState.bind(this);
    this.handleToCompleteState = this.handleToCompleteState.bind(this);
    this.updateToCompleteRun = this.updateToCompleteRun.bind(this);
    this.handleUpdateStatus = this.handleUpdateStatus.bind(this);
    this.updateRunStatus = this.updateRunStatus.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.info !== nextProps.info) {
      this.handleFavoriteState(nextProps.info);
      this.handleToCompleteState(nextProps.info);
      this.handleUpdateStatus(nextProps.info);
    }
  }

  handleFavoriteState(event) {
    this.setState({
      is_favorite: event.is_favorite === 0 ? 1 : 0,
    });
  }

  handleToCompleteState(event) {
    this.setState({
      to_complete: event.to_complete === 0 ? 1 : 0,
    });
  }

  handleUpdateStatus(event) {
    this.setState({
      status: event.status === 'CLOSED' ? 1 : 0,
    })
  }

  updateFavoriteRun() {
    this.props.updateRun({info: this.state.is_favorite}, this.props.info.id);
  }

  updateToCompleteRun() {
    this.props.updateComplete({info: this.state.to_complete}, this.props.info.id)
  }

  updateRunStatus() {
    this.props.updateStatus({info: this.state.status}, this.props.info.id)
  }

  render() {
    return (
        <DisplayStyleSpan
        isClicked={Boolean(this.props.info.id > 0)}
        >
          <NameDiv
          isClicked={Boolean(this.props.info.id > 0)}
          isFavorite={Boolean(this.props.info.is_favorite === 1)}
          >
            TRAIL NAME:  {this.props.info.name}
          </NameDiv>
          <TerrainDiv
          isClicked={Boolean(this.props.info.id > 0)}
          terrainType={this.props.info.terrain}
          >
            TERRAIN:  {this.props.info.terrain}
          </TerrainDiv>
          <StatusDiv
          isClicked={Boolean(this.props.info.id > 0)}
          statusType={this.props.info.status}
          >
            STATUS:   {this.props.info.status}
          </StatusDiv>
          <button className="display_btn"
          onClick={this.updateFavoriteRun}
          >
          COMPLETED</button>
          <button className="display_btn"
          onClick={this.updateToCompleteRun}
          >
          To Complete</button>
          <button className="display_btn"
          onClick={this.updateRunStatus}
          >
            {this.props.info.status === 'OPEN' ? 'RUN IS OPEN' : "RUN IS CLOSED"}
          </button>
        </DisplayStyleSpan>
    )
  }
}

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
  color: ${props => (props.isFavorite ? 'rgb(214, 175, 0)' : '#3daaff')};
  visibility: ${props => (props.isClicked ? 'visible' : 'hidden')};
  cursor: pointer;
`;

const TerrainDiv = styled.div`
  color: ${props => (
  props.terrainType === 'Black Diamond: Most Difficult' ? 'black' :
  props.terrainType === 'Blue Square: More Difficult' ? '#3daaff' :
  props.terrainType === 'Green Circle: Easiest Way Down' ? '#28a833' :
  'orange'
  )};
  visibility: ${props => (props.isClicked ? 'visible' : 'hidden')};
  cursor: pointer;
`;

const StatusDiv = styled.div`
  color: ${props => (props.statusType === 'OPEN' ? '#28a833' : '#aa1111')};
  visibility: ${props => (props.isClicked ? 'visible' : 'hidden')};
  cursor: pointer;
`;

export default Display;