import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Home = ({ fetchData, isLoading }) => {
  console.log(isLoading);
  const fetchDataEffect = () => fetchData();

  useEffect(fetchDataEffect, []);

  return <div className="home">signature</div>;
};

Home.propTypes = {
  signatures: PropTypes.array,
  title: PropTypes.string
};

export default Home;
