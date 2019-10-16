import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SignatureListContainer from '../../containers/SignatureListContainer';

const Home = ({ fetchData, isLoading }) => {
  const fetchDataEffect = () => fetchData();

  useEffect(fetchDataEffect, []);

  return (
    <div className="home">
      <SignatureListContainer />
    </div>
  );
};

Home.propTypes = {
  isLoading: PropTypes.bool,
  fetchData: PropTypes.func
};

export default Home;
