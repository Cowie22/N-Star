import React from 'react';
import styled from 'styled-components';

class ToCompleteDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <FavoriteStyleList>
        ToDo!!
        {this.props.info.map((run, i) => {
          if (run.to_complete === 1) {
            return (
              <li key={i}>
                <NameDiv
                isFavorite={Boolean(run.is_favorite === 1)}
                >
                TRAIL NAME:  {run.name}
                </NameDiv>
                <TerrainDiv
                terrainType={run.terrain}
                >
                  TERRAIN:  {run.terrain}
                </TerrainDiv>
                <StatusDiv
                statusType={run.status}
                >
                  STATUS:   {run.status === 1 ? 'OPEN' : 'CLOSED'}
                </StatusDiv>
              </li>
            )
          }
        })}
      </FavoriteStyleList>
    )
  }
}

export default ToCompleteDisplay;

const FavoriteStyleList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 200px;
  position: absolute;
  top: 60%;
  right: 1%;
  background: rgb(255, 255, 255, 0.4);
  color: #aa1111;
  font-size: 22px;
  font-weight: 800;
`;

const NameDiv = styled.div`
  color: ${props => (props.isFavorite ? 'rgb(255, 209, 0)' : '#3daaff')};
  cursor: pointer;
  font-size: 14px;
  font-weight: 800;
`;

const TerrainDiv = styled.div`
  color: ${props => (
  props.terrainType === 'Black Diamond: Most Difficult' ? 'black' :
  props.terrainType === 'Blue Square: More Difficult' ? '#3daaff' :
  props.terrainType === 'Green Circle: Easiest Way Down' ? '#28a833' :
  'orange'
  )};
  cursor: pointer;
  font-size: 14px;
  font-weight: 800;
`;

const StatusDiv = styled.div`
  color: ${props => (props.statusType === 1 ? '#28a833' : '#aa1111')};
  cursor: pointer;
  font-size: 14px;
  font-weight: 800;
`;