import React, { useState, useEffect } from 'react';
import '../App.css';

const BotCollection = ({ onBotEnlisted, onBotRelease }) => {
const [bots, setBots] = useState([]);

useEffect(() => {
fetch('http://localhost:3000/bots')
.then(response => response.json())
.then(data => setBots(data))
.catch(error => console.error(error));
}, []);

useEffect(() => {
setBots(bots => bots.filter(bot => !onBotRelease || !onBotRelease(bot.id)));
}, [onBotRelease]);

const handleEnlist = (bot) => {
onBotEnlisted(bot);
};

return (
<div >
<h1>Bot Collection</h1>
<div className="card-row">
{bots.map(bot => (
<div className="card" key={bot.id}>
<img className="card-img-top" src={bot.avatar_url} alt={bot.name} />
<div className="card-body">
<h5 className="card-title">{bot.name}</h5>
<p className="card-text">Health: {bot.health}</p>
<p className="card-text">Damage: {bot.damage}</p>
<p className="card-text">Armor: {bot.armor}</p>
<p className="card-text">Class: {bot.bot_class}</p>
<p className="card-text">Catchphrase: {bot.catchphrase}</p>

<button onClick={() => handleEnlist(bot)}>Enlist</button>
</div>
</div>
))}
</div>
</div>
);
};

export default BotCollection;