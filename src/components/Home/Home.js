import React from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';

import './Home.css';

const Home = props => {
  const { isMobile } = props;
  return (
    <div className="Home">
      <h1>Home</h1>

      <p>
        You are using:
        <strong>{isMobile ? 'mobile' : 'desktop'}</strong>
      </p>
    </div>
  );
};

Home.propTypes = {
  isMobile: bool,
};

const mapStateToProps = ({ device }) => ({
  isMobile: device.isMobile,
});

export default connect(
  mapStateToProps,
  null
)(Home);
