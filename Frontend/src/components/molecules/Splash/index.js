import React from 'react';
import { useHistory } from "react-router-dom";
import BGImage from '../../../assets/background.jpg';
import Logo from '../../../assets/YourLogo.png';
import './Styles.css';

function Splash() {
  const history = useHistory();

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row" style={{ backgroundImage: `url(${BGImage})` }}>
          <div className="col-5 col-sm-5 col-md-2 col-lg-2 col-xl-2">
            <img src={Logo} id="LogoImage" />
          </div>
          <div className="col-1 col-sm-1 col-md-6 col-lg-6 col-xl-6">
          </div>
          <div className="container">
            <div className="row">
              <div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2">
              </div>
              <div className="col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8">
                <h2 className="WelcomeText">WELCOME</h2>
                <h2 className="CommunityText">to our Community</h2>
                <hr className="Line" />
                <button className='JoinButton' onClick={() => history.push('/Dashboard')} color="primary">
                  <h3 className="JoinText">JOIN US NOW</h3>
                </button>
              </div>
              <div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2">
              </div>
            </div>
          </div>
          <div style={{ height: 150, width: '100%' }}></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Splash;