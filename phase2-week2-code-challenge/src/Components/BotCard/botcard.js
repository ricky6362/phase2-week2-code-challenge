import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleBolt } from '@fortawesome/free-solid-svg-icons';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import './botcard.css';

function BotCard(props) {
  const { name, catchphrase, health, damage, armor, avatar_url } = props.robot;

  const handleCardClick = () => {
    if (props.onRemoveClick) {
      props.onRemoveClick(); // Call the onRemoveClick function passed from BotCollection
    } else {
      props.onClick(props.robot); // Pass the clicked robot data to the parent component
    }
  }

  return (
    <div className='card-container' onClick={handleCardClick} style={{ pointerEvents: 'auto' }}>
      <div className='img-container'>
        <img src={avatar_url} alt={`Image of ${name}`} />
      </div>
      <div className='bot-info'>
        <div className='name-container'>
          <p className='name'>{name}</p>
          <p className='catchphrase'>{catchphrase}</p>
        </div>
        <div className='icon-container'>
          <p className='health'>
            <FontAwesomeIcon icon={faHeartCircleBolt} />
            {health}
          </p>
          <p className='damage'>
            <FontAwesomeIcon icon={faBoltLightning} />
            {damage}
          </p>
          <p className='armour'>
            <FontAwesomeIcon icon={faShieldHalved} />
            {armor}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
