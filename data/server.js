const jsonServer = require('json-server');
const data = require('./dragons.json');
const { finished } = require('stream');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  next();
});

server.get('/dragons', (req, res) => {
  res.jsonp(data.dragons);
});

// *Note: Ran out of time :( 
// server.post('/fight', (req, res) => {
//   const { playerDragon, computerDragon } = req.body;

//   if (!playerDragon.id || !computerDragon.id) {
//     return res.status(400).jsonp({ message: 'Missing ID' });
//   }

//   // they way the assignment is setup is not fair for "game" perhaps this is a better way (Not sure, and the dragons are not balanced)
//   const playerStranght = (playerDragon.attack + playerDragon.speed + playerDragon.defense) + playerDragon.hp;
//   const computerStranght = (computerDragon.attack + computerDragon.speed + computerDragon.defense) + computerDragon.hp;

//   if (playerStranght > computerStranght) {
//     computerDragon.hp = computerDragon.hp - (playerStranght / 10);
//     playerDragon.hp = playerDragon.hp - (computerStranght / 20);
//   }
//   if (playerStranght < computerStranght) {
//     computerDragon.hp = computerDragon.hp - (playerStranght / 20);
//     playerDragon.hp = playerDragon.hp - (computerStranght / 10);
//   }

//   if (playerDragon.hp <= 0) {
//     return res.json({ winner: playerDragon, tie: false, finished: true });
//   }

//   if (computerDragon.hp <= 0) {
//     return res.json({ winner: computerDragon, tie: false, finished: true });
//   }

//   if (playerDragon.hp === 0 || computerDragon.hp === 0) {
//     if (firstDragonSum === secondDragonSum) {
//       return res.json({ winner: null, tie: true, finished: true });
//     }
//   }

//   res.json({ playerDragon, computerDragon, finished: false })

// });

// *Note: Simpler version
server.post('/fight', (req, res) => {
  const { dragon1Id, dragon2Id } = req.body;

  if (!dragon1Id || !dragon2Id) {
    return res.status(400).jsonp({ message: 'Missing ID' });
  }

  const dragon1 = data.dragons.find((dragon) => dragon.id === dragon1Id);
  const dragon2 = data.dragons.find((dragon) => dragon.id === dragon2Id);

  if (!dragon1 || !dragon2) {
    return res.status(400).jsonp({ message: 'Invalid ID' });
  }

  const dragon1Sum =
    dragon1.attack + dragon1.defense + dragon1.hp + dragon1.speed;
  const dragon2Sum =
    dragon2.attack + dragon2.defense + dragon2.hp + dragon2.speed;

  if (dragon1Sum > dragon2Sum) {
    return res.json({ winner: dragon1, tie: false });
  }

  if (dragon2Sum > dragon1Sum) {
    return res.json({ winner: dragon2, tie: false });
  }

  if (dragon1Sum === dragon2Sum) {
    return res.json({ winner: null, tie: true });
  }
});

// Use default router
server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running');
});
