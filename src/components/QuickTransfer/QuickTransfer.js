import React, { useState, useRef } from 'react';
import './QuickTransfer.scss';
import profile1 from '../../images/profile1.png';
import profile2 from '../../images/profile2.png';
import profile3 from '../../images/profile3.png';
import profile4 from '../../images/profile4.png';
import { GrFormNext } from "react-icons/gr";

import MoneyTransfer from '../MoneyTransfer/MoneyTransfer';

const QuickTransfer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const profiles = [
    { name: 'Livia Bator', title: 'CEO', image: profile1 },
    { name: 'Randy Press', title: 'Director', image: profile2 },
    { name: 'Workman', title: 'Designer', image: profile3 },
    { name: 'New Profile 1', title: 'Title 1', image: profile4 },
    { name: 'New Profile 2', title: 'Title 2', image: profile1 },
    // Add more profiles as needed
  ];

  const itemsPerPage = 3; // Adjust this value to control the number of items per view

  const handleNext = () => {
    setActiveIndex((prevIndex) => {
      const nextIndex = prevIndex + itemsPerPage;
      return nextIndex >= profiles.length ? 0 : nextIndex;
    });
  };

  return (
    <div className="quick-transfer">
      <div className="profile-carousel" ref={carouselRef}>
        {profiles.slice(activeIndex, activeIndex + itemsPerPage).map((profile, index) => (
          <div key={index} className="profile">
            <div className="quick-card">
              <img src={profile.image} alt={profile.name} />
              <div className="card-content">
                <div>{profile.name}</div>
                <div>{profile.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="next-button" onClick={handleNext}>
      <GrFormNext />
      </button>
    <MoneyTransfer />
    </div>
  );
};

export default QuickTransfer;