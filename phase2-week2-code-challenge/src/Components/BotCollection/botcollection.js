import React from 'react';
import './botcollection.css';
import BotCard from '../BotCard/botcard';

function BotCollection({ selectedBots = [], onRemoveClick }) {
  return (
    <>
      <div className='favorite-bots'>
        {selectedBots.length > 0 ? (
          selectedBots.map(selectedBot => (
            <BotCard
              key={selectedBot.id}
              robot={selectedBot}
              onClick={() => {}}
              onRemoveClick={() => onRemoveClick(selectedBot.id)}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
}


export default BotCollection;
