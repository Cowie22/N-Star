import React from 'react';
import ImageMapper from 'react-image-mapper';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      runName: '',
      terrain: '',
      length: 0,
      open: true,
    };
  }
  render() {
    const URL = 'http://www.accommodationtahoe.com/assets/images/autogen/a_north.gif';
    const MAP = {
      name: 'my-map',
      areas: [
        // {name: '1', shape: 'poly', coords: [25,33,27,300,128,240,128,94], preFillColor: 'green', fillColor: 'blue'},
        // {name: '1', shape: 'poly', coords: [25,33,27,300,128,240, 128, 94], preFillColor: 'red', fillColor: 'red'},
        // {name: '2', shape: 'poly', coords: [219,118,220,210,283,210,284,119], preFillColor: 'pink'},
        // {name: '3', shape: 'poly', coords: [381,241,383,94,462,53,457,282], fillColor: 'yellow'},
        // {name: '4', shape: 'poly', coords: [245,285,290,285,274,239,249,238], preFillColor: 'red'},
        // {name: '5', shape: 'circle', coords: [170, 100, 25 ], preFillColor: 'red'},
        {name: 'Martis', shape: 'poly', coords: [532, 330, 491, 360, 474, 393, 466, 413, 440, 437, 422, 450, 429, 460, 429, 458, 434, 499, 457, 534, 464, 561, 495, 564, 493, 553, 451, 494, 455, 471, 443, 446, 443, 447, 468, 424, 484, 396, 496, 378, 522, 353, 534, 346], fillColor: 'rgb(255, 209, 0, 0.8)'},
        {name: 'Boca', shape: 'poly', coords: [536, 347, 528, 383, 536, 403, 538, 440, 525, 467, 518, 477, 518, 491, 516, 505, 541, 572, 566, 574, 562, 561, 546, 548, 536, 502, 539, 490, 551, 436, 553, 413, 540, 390, 538, 379, 543, 366, 543, 344], fillColor: 'rgb(255, 209, 0, 0.8)'},
        {name: 'Gooseneck', shape: 'poly', coords: [546, 341, 555, 404, 569, 439, 584, 525, 579, 525, 586, 577, 604, 578, 593, 514, 580, 459, 573, 419, 576, 414, 570, 408, 559, 345], fillColor: 'rgb(255, 209, 0, 0.8)'},
        {name: 'Stampede', shape: 'poly', coords: [589, 365, 593, 382, 604, 390, 605, 414, 608, 422, 603, 456, 604, 482, 593, 517, 601, 556, 616, 504, 623, 474, 621, 456, 620, 434, 615, 409, 612, 391], fillColor: 'rgb(255, 209, 0, 0.8)'},
        {name: 'Prosser', shape: 'poly', coords: [552, 339, 576, 357, 591, 366, 613, 391, 630, 405, 632, 418, 639, 418, 640, 432, 654, 444, 659, 461, 662, 480, 660, 497, 657, 513, 652, 528, 640, 546, 631, 559, 622, 566, 602, 568, 604, 582, 634, 583, 635, 565, 654, 549, 669, 531, 677, 517, 678, 501, 684, 490, 683, 471, 675, 455, 667, 439, 651, 423, 609, 367, 590, 350, 564, 332, 546, 329], fillColor: 'rgb(255, 209, 0, 0.8)'}
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
          />
        </div>
      </div>
    )
  }
}

export default App;