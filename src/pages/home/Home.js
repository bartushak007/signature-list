import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SignatureListContainer from '../../containers/SignatureListContainer';
import TopMenuContainer from '../../containers/TopMenuContainer';

const Home = ({ fetchData, isLoading }) => {
  const fetchDataEffect = () => fetchData();

  useEffect(fetchDataEffect, []);

  return (
    <div className="home">
      <TopMenuContainer />
      <SignatureListContainer />
    </div>
  );
};

Home.propTypes = {
  isLoading: PropTypes.bool,
  fetchData: PropTypes.func
};

export default Home;
