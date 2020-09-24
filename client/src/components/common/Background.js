import React, { Component } from 'react';

// importing horizontal images for the background
import Img1 from '../../images/background-1.png';
import Img2 from '../../images/background-2.png';
import Img4 from '../../images/background-4.png';
import Img5 from '../../images/background-5.png';

// importing vertical images for the background
import Img1v from '../../images/background-1-v.png';
import Img2v from '../../images/background-2-v.png';
import Img4v from '../../images/background-4-v.png';
import Img5v from '../../images/background-5-v.png';
import '../layout/layout.css';

class Background extends Component {

  state = {
    resizeNotifier: () => {},
  }

  render() {
    // horizontal versions of images
    const images = [Img1, Img2, Img4, Img5];
    var image = images[Math.floor(Math.random()*images.length)];

    // vertical versions of images
    const imagesV = [Img1v, Img2v, Img4v, Img5v];
    var imageV = imagesV[Math.floor(Math.random()*imagesV.length)];

    return (
        <div>
          <div id="bg">
            <img src={image} alt=""/>
            <img src={imageV} alt=""/>
          </div>
        </div>
    );
  }
}

export default Background;