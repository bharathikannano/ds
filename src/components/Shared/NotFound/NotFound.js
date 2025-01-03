import React from 'react';
import { FaTools, FaHardHat } from 'react-icons/fa';
import './NotFound.scss';
import { IoIosPerson } from "react-icons/io";


const NotFound = () => {
  return (
    <div className="not-found">
      <div className="construction">
        <div className="tools"><FaTools /></div>
        <div className="wrench"><IoIosPerson /></div>
        <div className="hard-hat"><FaHardHat /></div>
      </div>
      <h2>404 - Page Not Found</h2>
      <p className="message"><a rel="noopener noreferrer" href="https://bharathikannano.github.io/gitPholio/" target='_blank'>Bharathikannan </a>is waiting for the mock to build this page. Please check back later!</p>
    </div>
  );
};

export default NotFound;