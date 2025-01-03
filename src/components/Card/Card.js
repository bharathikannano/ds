import React from 'react';
import logo from '../../images/logo.png';
import chip from '../../images/chip.png';
import logo_gray from '../../images/logo_gray.png';
import chip_gray from '../../images/chip_gray.png';
import './Card.scss';
const Card = ({theam}) => {
  return (
    <div className='card-list'>
        {theam === 'dark' ? <div className='header-my-cards'>My Cards</div> : <div className='header-label'>See All</div> }
        
        <div className={`container ${theam}`}>
            <header>
                <sapan className="balance-container">
                    <p className='balance'>Balance</p>
                    <p className='amount'>$5,756</p>
                </sapan>
                <img src={theam !== 'dark' ? chip_gray : chip} alt="" className="chip" />
            </header>
            <div className="card-details">
                <div className="name-section">
                <h6 className='card-label'>Card Holder</h6>
                <h5 className="name">Eddy Cusuma</h5>
                </div>
                <div className="valid-date">
                <h6 className='date-label'>Valid Thru</h6>
                <h5 className='date'>05/28</h5>
                </div>
            </div>
            <hr/>
            <div className="number-section">
                <h5 className='card-number'>3778 **** **** 1234</h5>
                <span className="logo">
                    <img src={theam !== 'dark' ? logo_gray : logo} alt="" />
                </span>
            </div>
        </div>
    </div>
  );
};

export default Card;