import React from 'react';
import { FaTools, FaWrench, FaHardHat } from 'react-icons/fa';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="construction">
        <div className="tools"><FaTools /></div>
        <div className="wrench"><FaWrench /></div>
        <div className="hard-hat"><FaHardHat /></div>
      </div>
      <h2>404 - Page Not Found</h2>
      <p>Bharathikannan is waiting for the mock to build this page. Please check back later!</p>
    </div>
  );
};

export default NotFound;