import { Classes } from './classes';
import { Models } from './model';

let redSquadron: Array<Models.IXwing> = new Array<Models.IXwing>();
let rogueSquadron: Array<Models.IT70Xwing> = new Array<Models.IT70Xwing>();

redSquadron.push(new Classes.T65Xwing(
  'Biggs Darklighter', "R4"
));

redSquadron.push(new Classes.T65Xwing(
  'Wedge Antilles', 'R7-T1'
));

redSquadron.push(new Classes.T65Xwing(
  'Luke Skywalker', 'R2-D2'
));

rogueSquadron.push(new Classes.T70XWing(
  'Poe Dameron',
  'BB-8',
  'Black One'
));

rogueSquadron.push(new Classes.T70XWing(
  'Nien Numb',
  'R3-A2'
));

rogueSquadron.push(new Classes.T70XWing(
  'Jessika Pava',
  'M9-G8'
));

for (let ship of redSquadron){
  ship.accelerate();
}

for (let ship of rogueSquadron){
  ship.accelerate();
}