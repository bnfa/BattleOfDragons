import { Router, Request, Response } from "express";
import { Dragon } from "../models/Dragon.interface";

const router = Router();

const dragons: Dragon[] = [
    {
        "id": "dragon1",
        "name": "Mushu",
        "attack": 50,
        "defense": 60,
        "hp": 100,
        "speed": 90,
        "type": "Type"
    },
    {
        "id": "dragon2",
        "name": "Smaug",
        "attack": 40,
        "defense": 80,
        "hp": 100,
        "speed": 50,
        "type": "Type"
    },
    {
        "id": "dragon3",
        "name": "Toothless",
        "attack": 70,
        "defense": 40,
        "hp": 100,
        "speed": 100,
        "type": "Type"
    },
    {
        "id": "dragon4",
        "name": "Falkor",
        "attack": 55,
        "defense": 65,
        "hp": 100,
        "speed": 70,
        "type": "Type"
    },
    {
        "id": "dragon5",
        "name": "Ehecati",
        "attack": 60,
        "defense": 60,
        "hp": 100,
        "speed": 90,
        "type": "Type"
    }
];

router.get('/', (req: Request, res: Response<Array<Dragon>>) => {
    res.json(dragons);
});


router.post('/fight', (req: Request, res: Response):any => {
    const { playerDragon, computerDragon } = req.body;

    if (!playerDragon.id || !computerDragon.id) {
        return res.status(400).jsonp({ message: 'Missing ID' });
    }

    // they way the assignment is setup is not fair for "game" perhaps this is a better way (Not sure, and the dragons are not balanced)
    const playerStranght = (playerDragon.attack + playerDragon.speed + playerDragon.defense) + playerDragon.hp;
    const computerStranght = (computerDragon.attack + computerDragon.speed + computerDragon.defense) + computerDragon.hp;

    if (playerStranght > computerStranght) {
        computerDragon.hp = computerDragon.hp - (playerStranght / 10);
        playerDragon.hp = playerDragon.hp - (computerStranght / 20);
    }
    if (playerStranght < computerStranght) {
        computerDragon.hp = computerDragon.hp - (playerStranght / 20);
        playerDragon.hp = playerDragon.hp - (computerStranght / 10);
    }

    if (playerDragon.hp <= 0) {
        return res.json({ winner: computerDragon, tie: false });
    }

    if (computerDragon.hp <= 0) {
        return res.json({ winner: playerDragon, tie: false });
    }

    if (playerDragon.hp === 0 || computerDragon.hp === 0) {
        return res.json({ winner: null, tie: true });
    }

    res.json({ playerDragon, computerDragon, winner: null })

});

export default router;