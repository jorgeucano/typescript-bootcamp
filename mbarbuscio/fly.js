"use strict";
exports.__esModule = true;
var classes_1 = require("./classes");
var redSquadron = new Array();
var rogueSquadron = new Array();
redSquadron.push(new classes_1.Classes.T65Xwing('Biggs Darklighter', "R4"));
redSquadron.push(new classes_1.Classes.T65Xwing('Wedge Antilles', 'R7-T1'));
redSquadron.push(new classes_1.Classes.T65Xwing('Luke Skywalker', 'R2-D2'));
rogueSquadron.push(new classes_1.Classes.T70XWing('Poe Dameron', 'BB-8', 'Black One'));
rogueSquadron.push(new classes_1.Classes.T70XWing('Nien Numb', 'R3-A2'));
rogueSquadron.push(new classes_1.Classes.T70XWing('Jessika Pava', 'M9-G8'));
for (var _i = 0, redSquadron_1 = redSquadron; _i < redSquadron_1.length; _i++) {
    var ship = redSquadron_1[_i];
    ship.accelerate();
}
for (var _a = 0, rogueSquadron_1 = rogueSquadron; _a < rogueSquadron_1.length; _a++) {
    var ship = rogueSquadron_1[_a];
    ship.accelerate();
}
