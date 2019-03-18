import React from 'react';
import axios from 'axios';
import ImageMapper from 'react-image-mapper';
import Display from './Display.jsx';
import FavoriteDisplay from './FavoriteDisplay.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      runInfo: [],
      oneRunInfo: [],
      id: 0,
      name: '',
      terrain: '',
      status: '',
      is_favorite: 0,
      to_complete: 0,
    };
    this.getRuns = this.getRuns.bind(this);
    this.updateRun = this.updateRun.bind(this);
    this.updateComplete = this.updateComplete.bind(this);
  }

  componentDidMount() {
    this.getRuns();
  }

  getRuns() {
    axios.get(`/run`)
      .then(res => {
        this.setState({
          runInfo: res.data,
        });
      });
  }

  getOneRun(id) {
    axios.get(`/run/${id}`)
      .then(res => {
        this.setState({
          oneRunInfo: res.data,
          id: res.data[0].id,
          name: res.data[0].name,
          terrain: res.data[0].terrain,
          status: res.data[0].status === 1 ? 'OPEN' : 'CLOSED',
          is_favorite: res.data[0].is_favorite,
          to_complete: res.data[0].to_complete,
        });
      });
  }

  updateRun(info, id) {
    axios.put(`/run/${id}`, info)
      .then(this.getOneRun(id))
      .then(this.getRuns());
  }

  updateComplete(info, id) {
    axios.put(`/toComplete/${id}`, info)
      .then(this.getOneRun(id))
      .then(this.getRuns());
  }

  clickedOutside() {
		this.setState({
      id: 0,
    });
	}

  render() {
    const URL = 'http://www.accommodationtahoe.com/assets/images/autogen/a_north.gif';
    const MAP = {
      name: 'my-map',
      areas: [
        {name: 'Martis', id: 1, shape: 'poly', coords: [532, 330, 491, 360, 474, 393, 466, 413, 440, 437, 422, 450, 429, 460, 429, 458, 434, 499, 457, 534, 464, 561, 495, 564, 493, 553, 451, 494, 455, 471, 443, 446, 443, 447, 468, 424, 484, 396, 496, 378, 522, 353, 534, 346], fillColor: 'rgb(255, 209, 0, 0.8)'},
        {name: 'Boca', id: 2, shape: 'poly', coords: [536, 347, 528, 383, 536, 403, 538, 440, 525, 467, 518, 477, 518, 491, 516, 505, 541, 572, 566, 574, 562, 561, 546, 548, 536, 502, 539, 490, 551, 436, 553, 413, 540, 390, 538, 379, 543, 366, 543, 344], fillColor: 'rgb(255, 209, 0, 0.8)'},
        {name: 'Gooseneck', id: 3, shape: 'poly', coords: [546, 341, 555, 404, 569, 439, 584, 525, 579, 525, 586, 577, 604, 578, 593, 514, 580, 459, 573, 419, 576, 414, 570, 408, 559, 345], fillColor: 'rgb(255, 209, 0, 0.8)'},
        {name: 'Stampede', id: 4, shape: 'poly', coords: [589, 365, 593, 382, 604, 390, 605, 414, 608, 422, 603, 456, 604, 482, 593, 517, 601, 556, 616, 504, 623, 474, 621, 456, 620, 434, 615, 409, 612, 391], fillColor: 'rgb(255, 209, 0, 0.8)'},
        {name: 'Prosser', id: 5, shape: 'poly', coords: [552, 339, 576, 357, 591, 366, 613, 391, 630, 405, 632, 418, 639, 418, 640, 432, 654, 444, 659, 461, 662, 480, 660, 497, 657, 513, 652, 528, 640, 546, 631, 559, 622, 566, 602, 568, 604, 582, 634, 583, 635, 565, 654, 549, 669, 531, 677, 517, 678, 501, 684, 490, 683, 471, 675, 455, 667, 439, 651, 423, 609, 367, 590, 350, 564, 332, 546, 329], fillColor: 'rgb(255, 209, 0, 0.8)'}
      ]
    };
    return (
      <div>
        <h1>N-STAR</h1>
        <div className="image_container">
          <ImageMapper className="N-Star"
          src={URL}
          map={MAP}
          width={900}
          height={700}
          onClick={area => this.getOneRun(area.id)}
          onImageClick={() => this.clickedOutside()}
          />
        </div>
        <Display
        info={this.state}
        updateRun={this.updateRun}
        updateComplete={this.updateComplete}
        />
        <FavoriteDisplay
        info={this.state.runInfo}
        />
      </div>
    )
  }
}

export default App;