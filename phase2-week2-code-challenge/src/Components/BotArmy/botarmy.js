import React, { useEffect, useState } from 'react';
import './botarmy.css';
import BotCard from '../BotCard/botcard';
import BotCollection from '../BotCollection/botcollection';

function BotArmy() {
  const [robots, setRobots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [selectedBots, setSelectedBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(data => {
        setRobots(data);
      });
  }, []);

  const handleBotClick = (bot) => {
    if (!selectedBots.some(selected => selected.id === bot.id)) {
      setSelectedBot(bot);
      setSelectedBots([...selectedBots, bot]);
    }
  };

  const handleRemoveClick = (botId) => {
    setSelectedBots(prevBots => prevBots.filter(bot => bot.id !== botId));
  };

  return (
    <>
      <BotCollection selectedBots={selectedBots} onRemoveClick={handleRemoveClick} />
      <div className='robots-container'>
        {robots.map(robot => (
          <BotCard key={robot.id} robot={robot} onClick={() => handleBotClick(robot)} />
        ))}
      </div>
    </>
  );
}

export default BotArmy;
