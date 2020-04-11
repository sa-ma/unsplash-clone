import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Result = ({ name }) => {
  const { search } = useLocation();
  const parsed = queryString.parse(search);
  console.log(parsed);
  return <div>Hello Sama</div>;
};

export default Result;
