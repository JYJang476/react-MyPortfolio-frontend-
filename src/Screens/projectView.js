import React, { Component } from 'react';
import Button from '../Components/button';
import Nav from './nav';
import '../css/projectView.css';


class SlideComponent extends Component {
    thispage = 1;

    LeftSlide() {
        if(this.thispage == 1)
            return;

        let contentElement = document.getElementsByClassName("Content")[0];
    }

    render() {
        return (
          <div className="ContentMain">
              <div className="leftArrow"></div>
              <div className="ImgArea">
                  <div className="Head">
                      <div className="EditButton">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40.5" height="35.993" viewBox="0 0 40.5 35.993">
                              <path id="Icon_awesome-edit" data-name="Icon awesome-edit" d="M28.308,5.85l6.342,6.342a.687.687,0,0,1,0,.97L19.294,28.519l-6.525.724a1.368,1.368,0,0,1-1.512-1.512l.724-6.525L27.337,5.85A.687.687,0,0,1,28.308,5.85ZM39.7,4.24,36.267.809a2.75,2.75,0,0,0-3.881,0L29.9,3.3a.687.687,0,0,0,0,.97l6.342,6.342a.687.687,0,0,0,.97,0L39.7,8.121a2.75,2.75,0,0,0,0-3.881ZM27,24.342V31.5H4.5V9H20.658a.865.865,0,0,0,.6-.246l2.813-2.812a.844.844,0,0,0-.6-1.441H3.375A3.376,3.376,0,0,0,0,7.875v24.75A3.376,3.376,0,0,0,3.375,36h24.75A3.376,3.376,0,0,0,31.5,32.625V21.53a.845.845,0,0,0-1.441-.6l-2.812,2.813A.865.865,0,0,0,27,24.342Z" transform="translate(0 -0.007)"/>
                          </svg>
                      </div>
                  </div>
                  <div className="Content">
                      <img src={this.props.src} alt=""/>
                  </div>
                  <div className="Page">
                      <div className="PageItem">1</div>
                      <div className="PageItem">2</div>
                      <div className="PageItem">3</div>
                  </div>
              </div>
              <div className="rightArrow"></div>
          </div>
        );
    }
}

const projectView = ({match}) => {
    return (
        <div>
            <Nav/>
            <SlideComponent src="https://placeimg.com/540/540/any"/>
        </div>
    );
}

export default projectView;
