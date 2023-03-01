const PORT = 8000;
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());

https: app.locals.data = {
	wrestlers: [
		{
			id: 001,
			name: 'Macho Man Randy Savage',
			height: '6\' 2"',
			weight: 248,
			finisher: ['Diving Elbow Drop'],
			damage: 7,
            image: '/macho-man.png'
		},
		{
			id: 002,
			name: 'Hulk Hogan',
			height: '6\' 7"',
			weight: 275,
			damage: 9,
			finisher: ['Axe Bomber \n (Crooked Arm Lariat)', 'Legdrop'],
            image: '/hulk-hogan.png'
		},
		{
			id: 003,
			name: 'The Ultimate Warrior',
			height: '6\' 4"',
			weight: 280,
			damage: 8,
			finisher: [
				'Warrior Press \n (Gorilla Press Slam)',
				'Warrior Splash \n (Running Big Splash)',
			],
            image: '/ultimate-warrior.png'
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
			damage: 10,
            image: '/undertaker.png'
		},
	],

	moves: [
		{
			aerialMoves: [
				'Arm twist ropewalk chop',
				'Diving overhead chop',
				'Diving leg drop',
				'Diving elbow drop',
				'Diving 450 elbow drop',
				'Diving back elbow drop',
				'Diving pointed elbow drop',
				'Shooting star elbow drop',
				'Diving fist drop',
				'Diving headbutt',
				'Diving knee drop',
				'Backwards facing diving senton',
				'630° senton',
				'Diving seated senton',
				'Moonsault senton',
				'Senton bomb',
				'Shooting star senton',
				'Diving spear',
				'450° splash',
				'Corner slingshot splash',
				'Diving crossbody',
				'Frog splash',
				'Moonsault double foot stomp',
				'Mushroom stomp',
				'Falling Thesz press',
				'Shooting star press',
				'Diving calf kick',
				'Diving leg lariat',
				'Flying spinning heel kick',
				'Flying thrust kick',
				'Missile dropkick',
				'Frankensteiner',
				'Dragonrana',
				'Phoenixrana',
			],
			holdMoves: [
				'Camel clutch',
				'Chinlock',
				'Clawhold',
				'Crossface',
				'Scissored armbar crossface',
				'Straight jacket crossface',
				'Fish hook',
				'Front chancery',
				'Headscissors',
				'Nelson hold',
				'STF',
				'Figure-four armlock',
				'Omoplata',
				'Armbar',
				'Hammerlock',
				'Headscissors armbar',
				'Short arm scissors',
				'Tiger feint crucifix armbar',
				'Barely legal',
				'Chickenwing',
				'Double chickenwing',
				'Kimura lock',
				'Wrist lock',
				'Bear hug',
				'Side bear hug',
				'Waist lock',
				'Body scissors',
				'Body triangle',
				'Back and torso stretches',
				'Octopus hold',
				'Backbreaker hold',
				'Argentine backbreaker rack',
				'Canadian backbreaker rack',
				'Toehold',
				'Ankle lock',
				'Cloverleaf',
				'Cross kneelock',
				'Calf crusher',
				'Damascus head and leglock',
				'Figure-four leglock',
				'Indian deathlock',
				'Sharpshooter',
				'Inverted Sharpshooter',
				'Spinning toe hold',
				'Wishbone',
				'Arm-hook sleeper',
				'Cobra clutch',
				'Dragon sleeper',
				"Hangman's choke",
				'Rear naked choke',
				'Spider twist',
				'Single underhook',
				'Reverse crucifix',
			],
			strikeMoves: [
				'Stinger splash',
				'Cross chop',
				'Spinning knife edge chop',
				'Mongolian chop',
				'Corkscrew elbow drop',
				'Spinning headlock elbow drop',
				'Corner back elbow',
				'Discus back elbow',
				'Swinging back elbow',
				'Mounted elbow drop',
				'Rolling elbow',
				'Crucifix elbows',
				'Short-arm elbow smash',
				'Inverted forearm club',
				'Flying forearm smash',
				'Running Forearm smash',
				'Sliding forearm smash',
				'Reverse battering ram',
				'Running single leg high knee',
				'Calf kick',
				'Dragon whip',
				'Rolling wheel kick',
				'Scissors kick',
				'Superkick',
				'Big boot',
				'Bicycle kick',
				'Dropkick',
				'Kangaroo Kick',
				'Legsweep',
				'Mule kick',
				'Savate kick',
				'Backflip kick',
				'Cartwheel kick',
				'Crane kick',
				'Enzuigiri',
				'Overhead kick',
				'Shoot kick',
				'Tiger feint kick',
				'Double open hand chop',
				'Double slap',
				'Spinning back fist',
				'Leapfrog body guillotine',
				'Koronco buster',
				'Cannonball',
				'Striking spear',
				'Spear with multiple punches',
				'Tilt-a-whirl crossbody',
				'Moonsault double foot stomp',
				'Back rake',
				'Biting',
				'Eye poke',
				'Eye rake',
				'Hair pull',
				'Hangman',
				'Low blow',
				'Asian mist',
				'Chair shot',
				'Fireball',
				'Guitar shot',
			],
			throwMoves: [
				'Inverted leg drop bulldog',
				'Wrist-clutch fisherman driver',
				'Michinoku driver II-B',
				'Inverted Airplane Spin',
				'Inverted Death Valley driver',
				'Side Death Valley driver',
				'Olympic slam',
				'Samoan drop',
				'Pop-up',
				'Inverted full nelson slam',
				"Fireman's carry gutbuster",
				'Gutbuster drop',
				'Frankensteiner',
				'Hurricanrana driver',
				'Rope-aided hurricanrana',
				'Sitout rear mat slam',
				'Sitout pumphandle slam',
				'Cobra clutch legsweep',
				'Forward Russian legsweep',
				'Three-quarter facelock Russian legsweep',
				'Arm Trap Cradle Somersault STO',
				'Chokehold STO',
				'Front facelock STO',
				'Arm trap flatliner',
				'Elevated flatliner',
				'Gory Special Swinging flatliner',
				'Leaping flatliner',
				'Lifting flatliner',
				'Swinging flatliner',
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
