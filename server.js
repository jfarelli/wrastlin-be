const PORT = 8000;
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());

// let randomDamage = Math.floor(Math.random() * this.moves.length)

https: app.locals.data = {
	wrestlers: [
		{
			id: 001,
			name: 'Macho Man Randy Savage',
			height: '6\' 2"',
			weight: 248,
			finisher: ['Diving Elbow Drop'],
			damage: Math.floor(Math.random() * 20),
			image: '/macho-man.png',
		},
		{
			id: 002,
			name: 'Hulk Hogan',
			height: '6\' 7"',
			weight: 275,
			damage: Math.floor(Math.random() * 20),
			finisher: ['Axe Bomber \n (Crooked Arm Lariat)', 'Legdrop'],
			image: '/hulk-hogan.png',
		},
		{
			id: 003,
			name: 'The Ultimate Warrior',
			height: '6\' 4"',
			weight: 280,
			damage: Math.floor(Math.random() * 20),
			finisher: [
				'Warrior Press \n (Gorilla Press Slam)',
				'Warrior Splash \n (Running Big Splash)',
			],
			image: '/ultimate-warrior.png',
		},
		{
			id: 004,
			name: 'The Undertaker',
			height: '6\' 9"',
			weight: 299,
			finisher: [
				'Chokeslam',
				'Last Ride \n (Elevated Power Bomb)',
				'Hells Gate \n (Gogoplata)',
				'Tombstone Piledriver',
			],
			damage: Math.floor(Math.random() * 20),
			image: '/undertaker.png',
		},
	],

	moves: [
		{
			aerialMoves: [
				{
					name: 'Arm twist ropewalk chop',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Diving overhead chop',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Diving leg drop', damage: Math.floor(Math.random() * 10) },
				{ name: 'Diving elbow drop', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Diving 450 elbow drop',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Diving back drop', damage: Math.floor(Math.random() * 10) },
				{ name: 'Diving pointed drop', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Shooting star elbow drop',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Diving fist drop', damage: Math.floor(Math.random() * 10) },
				{ name: 'Diving headbutt', damage: Math.floor(Math.random() * 10) },
				{ name: 'Diving knee drop', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Backwards facing diving senton',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: '630° senton', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Diving seated senton',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Moonsault senton', damage: Math.floor(Math.random() * 10) },
				{ name: 'Senton bomb', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Shooting star senton',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Diving spear', damage: Math.floor(Math.random() * 10) },
				{ name: '450° splash', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Corner slingshot splash',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Diving crossbody', damage: Math.floor(Math.random() * 10) },
				{ name: 'Frog splash', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Moonsault double foot stomp',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Mushroom stomp', damage: Math.floor(Math.random() * 10) },
				{ name: 'Falling Thesz press', damage: Math.floor(Math.random() * 10) },
				{ name: 'Shooting star press', damage: Math.floor(Math.random() * 10) },
				{ name: 'Diving calf kick', damage: Math.floor(Math.random() * 10) },
				{ name: 'Diving leg lariat', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Flying spinning heel kick',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Flying thrust kick', damage: Math.floor(Math.random() * 10) },
				{ name: 'Missile dropkick', damage: Math.floor(Math.random() * 10) },
				{ name: 'Frankensteiner', damage: Math.floor(Math.random() * 10) },
				{ name: 'Dragonrana', damage: Math.floor(Math.random() * 10) },
				{ name: 'Phoenixrana', damage: Math.floor(Math.random() * 10) },
			],
			holdMoves: [
				{ name: 'Camel clutch', damage: Math.floor(Math.random() * 10) },
				{ name: 'Chinlock', damage: Math.floor(Math.random() * 10) },
				{ name: 'Clawhold', damage: Math.floor(Math.random() * 10) },
				{ name: 'Crossface', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Scissored armbar crossface',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Fish hook', damage: Math.floor(Math.random() * 10) },
				{ name: 'Front chancery', damage: Math.floor(Math.random() * 10) },
				{ name: 'Headscissors', damage: Math.floor(Math.random() * 10) },
				{ name: 'Nelson hold', damage: Math.floor(Math.random() * 10) },
				{ name: 'STF', damage: Math.floor(Math.random() * 10) },
				{ name: 'Figure-four armlock', damage: Math.floor(Math.random() * 10) },
				{ name: 'Omoplata', damage: Math.floor(Math.random() * 10) },
				{ name: 'Armbar', damage: Math.floor(Math.random() * 10) },
				{ name: 'Hammerlock', damage: Math.floor(Math.random() * 10) },
				{ name: 'Headscissors armbar', damage: Math.floor(Math.random() * 10) },
				{ name: 'Short arm scissors', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Tiger feint crucifix armbar',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Barely legal', damage: Math.floor(Math.random() * 10) },
				{ name: 'Chickenwing', damage: Math.floor(Math.random() * 10) },
				{ name: 'Double chickenwing', damage: Math.floor(Math.random() * 10) },
				{ name: 'Kimura lock', damage: Math.floor(Math.random() * 10) },
				{ name: 'Wrist lock', damage: Math.floor(Math.random() * 10) },
				{ name: 'Bear hug', damage: Math.floor(Math.random() * 10) },
				{ name: 'Side bear hug', damage: Math.floor(Math.random() * 10) },
				{ name: 'Waist lock', damage: Math.floor(Math.random() * 10) },
				{ name: 'Body scissors', damage: Math.floor(Math.random() * 10) },
				{ name: 'Body triangle', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Back and torso stretches',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Octopus hold', damage: Math.floor(Math.random() * 10) },
				{ name: 'Backbreaker hold', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Argentine backbreaker rack',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Canadian backbreaker rack',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Toehold', damage: Math.floor(Math.random() * 10) },
				{ name: 'Ankle lock', damage: Math.floor(Math.random() * 10) },
				{ name: 'Cloverleaf', damage: Math.floor(Math.random() * 10) },
				{ name: 'Cross kneelock', damage: Math.floor(Math.random() * 10) },
				{ name: 'Calf crusher', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Damascus head and leglock',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Figure-four leglock', damage: Math.floor(Math.random() * 10) },
				{ name: 'Indian deathlock', damage: Math.floor(Math.random() * 10) },
				{ name: 'Sharpshooter', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Inverted Sharpshooter',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Spinning toe hold', damage: Math.floor(Math.random() * 10) },
				{ name: 'Wishbone', damage: Math.floor(Math.random() * 10) },
				{ name: 'Arm-hook sleeper', damage: Math.floor(Math.random() * 10) },
				{ name: 'Cobra clutch', damage: Math.floor(Math.random() * 10) },
				{ name: 'Dragon sleeper', damage: Math.floor(Math.random() * 10) },
				{ name: "Hangman's choke", damage: Math.floor(Math.random() * 10) },
				{ name: 'Rear naked choke', damage: Math.floor(Math.random() * 10) },
				{ name: 'Spider twist', damage: Math.floor(Math.random() * 10) },
				{ name: 'Single underhook', damage: Math.floor(Math.random() * 10) },
				{ name: 'Reverse crucifix', damage: Math.floor(Math.random() * 10) },
			],
			strikeMoves: [
				{ name: 'Stinger splash', damage: Math.floor(Math.random() * 10) },
				{ name: 'Cross chop', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Spinning knife edge chop',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Mongolian chop', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Corkscrew elbow drop',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Spinning headlock elbow drop',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Corner back elbow', damage: Math.floor(Math.random() * 10) },
				{ name: 'Discus back elbow', damage: Math.floor(Math.random() * 10) },
				{ name: 'Mounted elbow drop', damage: Math.floor(Math.random() * 10) },
				{ name: 'Swinging back elbow', damage: Math.floor(Math.random() * 10) },
				{ name: 'Rolling elbow', damage: Math.floor(Math.random() * 10) },
				{ name: 'Crucifix elbows', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Short-arm elbow smash',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Inverted forearm club',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Flying forearm smash',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Running Forearm smash',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Sliding forearm smash',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Reverse battering ram',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Running single leg high knee',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Calf kick', damage: Math.floor(Math.random() * 10) },
				{ name: 'Dragon whip', damage: Math.floor(Math.random() * 10) },
				{ name: 'Rolling wheel kick', damage: Math.floor(Math.random() * 10) },
				{ name: 'Scissors kick', damage: Math.floor(Math.random() * 10) },
				{ name: 'Superkick', damage: Math.floor(Math.random() * 10) },
				{ name: 'Big boot', damage: Math.floor(Math.random() * 10) },
				{ name: 'Bicycle kick', damage: Math.floor(Math.random() * 10) },
				{ name: 'Dropkick', damage: Math.floor(Math.random() * 10) },
				{ name: 'Kangaroo Kick', damage: Math.floor(Math.random() * 10) },
				{ name: 'Legsweep', damage: Math.floor(Math.random() * 10) },
				{ name: 'Mule kick', damage: Math.floor(Math.random() * 10) },
				{ name: 'Savate kick', damage: Math.floor(Math.random() * 10) },
				{ name: 'Backflip kick', damage: Math.floor(Math.random() * 10) },
				{ name: 'Cartwheel kick', damage: Math.floor(Math.random() * 10) },
				{ name: 'Crane kick', damage: Math.floor(Math.random() * 10) },
				{ name: 'Enzuigiri', damage: Math.floor(Math.random() * 10) },
				{ name: 'Overhead kick', damage: Math.floor(Math.random() * 10) },
				{ name: 'Shoot kick', damage: Math.floor(Math.random() * 10) },
				{ name: 'Tiger feint kick', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Double open hand chop',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Double slap', damage: Math.floor(Math.random() * 10) },
				{ name: 'Spinning back fist', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Leapfrog body guillotine',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Koronco buster', damage: Math.floor(Math.random() * 10) },
				{ name: 'Cannonball', damage: Math.floor(Math.random() * 10) },
				{ name: 'Striking spear', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Spear with multiple punches',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Tilt-a-whirl crossbody',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Moonsault double foot stomp',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Back rake', damage: Math.floor(Math.random() * 10) },
				{ name: 'Biting', damage: Math.floor(Math.random() * 10) },
				{ name: 'Eye poke', damage: Math.floor(Math.random() * 10) },
				{ name: 'Eye rake', damage: Math.floor(Math.random() * 10) },
				{ name: 'Hair pull', damage: Math.floor(Math.random() * 10) },
				{ name: 'Hangman', damage: Math.floor(Math.random() * 10) },
				{ name: 'Low blow', damage: Math.floor(Math.random() * 10) },
				{ name: 'Asian mist', damage: Math.floor(Math.random() * 10) },
				{ name: 'Chair shot', damage: Math.floor(Math.random() * 10) },
				{ name: 'Fireball', damage: Math.floor(Math.random() * 10) },
				{ name: 'Guitar shot', damage: Math.floor(Math.random() * 10) },
			],
			throwMoves: [
				{
					name: 'Inverted leg drop bulldog',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Wrist-clutch fisherman driver',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Michinoku driver II-B',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Inverted Airplane Spin',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Inverted Death Valley driver',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Side Death Valley driver',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Olympic slam', damage: Math.floor(Math.random() * 10) },
				{ name: 'Samoan drop', damage: Math.floor(Math.random() * 10) },
				{ name: 'Pop-up', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Inverted full nelson slam',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: "Fireman's carry gutbuster",
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Gutbuster drop', damage: Math.floor(Math.random() * 10) },
				{ name: 'Frankensteiner', damage: Math.floor(Math.random() * 10) },
				{ name: 'Hurricanrana driver', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Rope-aided hurricanrana',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Sitout rear mat slam',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Sitout pumphandle slam',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Cobra clutch legsweep',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Forward Russian legsweep',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Three-quarter facelock Russian legsweep',
					damage: Math.floor(Math.random() * 10),
				},
				{
					name: 'Arm Trap Cradle Somersault STO',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Chokehold STO', damage: Math.floor(Math.random() * 10) },
				{ name: 'Front facelock STO', damage: Math.floor(Math.random() * 10) },
				{ name: 'Arm trap flatliner', damage: Math.floor(Math.random() * 10) },
				{ name: 'Elevated flatliner', damage: Math.floor(Math.random() * 10) },
				{
					name: 'Gory Special Swinging flatliner',
					damage: Math.floor(Math.random() * 10),
				},
				{ name: 'Leaping flatliner', damage: Math.floor(Math.random() * 10) },
				{ name: 'Lifting flatliner', damage: Math.floor(Math.random() * 10) },
				{ name: 'Swinging flatliner', damage: Math.floor(Math.random() * 10) },
			],
		},
	],
};

app.set('port', process.env.PORT || PORT);
app.locals.title = 'wrastlin-be';

app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (req, res) => {
	const data = app.locals.data;
	if (!data) {
		res.status(404).send({
			error: `OOOOOHH YEEEAAAHHH!!! The server IS down! Snap into a Slim Jim and try again!`,
		});
	}
	res.send({ data });
});

app.listen(app.get('port'), () => {
	console.log(
		`${app.locals.title} is running on http://localhost:${app.get('port')}.`
	);
});

module.exports = app;

// --------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------FUTURE ITERATIONS------------------------------------------------------------- //
// --------------------------------------------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------ //
// GET the WRESTLER data for dropdown selection. Already tested w/ Postman.
// ------------------------------------------------------------------------ //

// app.get('/wrestlers/:id', (request, response) => {
// 	const data = app.locals.data.wrestlers;
// 	const wrestlerID = request.params.id;
// 	let foundWrestler = data.find(
// 		(wrestler) => wrestler.id === parseInt(wrestlerID)
// 	);
// 	if (!foundWrestler) {
// 		response.status(404).send({
// 			error: `That wrestler didn't make the cut! Try again!`,
// 		});
// 	}
// 	response.send({ foundWrestler });
// });

// ------------------------------------------------------------------------ //
// GET the MOVES data for dropdown selection. Already tested w/ Postman.
// ------------------------------------------------------------------------ //

// app.get('/moves', (request, response) => {
// 	const data = app.locals.data.moves[0];
// 	const { aerialMoves, holdMoves, strikeMoves, throwMoves } = data;
// 	if (!data) {
// 		response.status(404).send({
// 			error: `That move is reserved for backyard brawls, and has no place in the WWF! Try again!`,
// 		});
// 	}
// 	response.send({ aerialMoves, holdMoves, strikeMoves, throwMoves });
// });
// --------------------------------------------------------------------------------------------------------------------------- //
// --------------------------------------------------------------------------------------------------------------------------- //
// --------------------------------------------------------------------------------------------------------------------------- //
