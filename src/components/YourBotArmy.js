import React from 'react';
import '../App.css';

const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {
if (!army) return null;

const handleDischarge = (id) => {
fetch(`http://localhost:3000/bots/${id}`, {
method: 'DELETE',
})
.then(response => {
if (response.ok) {
dischargeBot(id);
alert(`Bot ${id} has been discharged forever!`);
}
})
.catch(error => console.error(error));
};

return (
<div className='your-bot-army yellow-bg'>
<h2>Your Bot Army</h2>
{army.map(bot => (
<div key={bot.id} className="card">
<img className="card-img-top" src={bot.avatar_url} alt={bot.name} />
<div className="card-body">
<h5 className="card-title">{bot.name}</h5>
<p className="card-text">Health: {bot.health}</p>
<p className="card-text">Damage: {bot.damage}</p>
<p className="card-text">Armor: {bot.armor}</p>
<p className="card-text">Class: {bot.bot_class}</p>
<p className="card-text">Catchphrase: {bot.catchphrase}</p>
<button onClick={() => releaseBot(bot)}>Remove</button>
<button className="discharge-btn" onClick={() => handleDischarge(bot.id)}>X</button>
</div>
</div>
))}
</div>
);
};

export default YourBotArmy;