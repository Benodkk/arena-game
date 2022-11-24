import weapon0 from "./images/weapons/weapon0.png";
import weapon1 from "./images/weapons/weapon1.png";
import weapon2 from "./images/weapons/weapon2.png";
import weapon3 from "./images/weapons/weapon3.png";
import weapon4 from "./images/weapons/weapon4.png";
import weapon5 from "./images/weapons/weapon5.png";
import weapon6 from "./images/weapons/weapon6.png";
import weapon7 from "./images/weapons/weapon7.png";
import weapon8 from "./images/weapons/weapon8.png";
import weapon9 from "./images/weapons/weapon9.png";
import weapon10 from "./images/weapons/weapon10.png";
import weapon11 from "./images/weapons/weapon11.png";
import weapon12 from "./images/weapons/weapon12.png";
import weapon13 from "./images/weapons/weapon13.png";
import weapon14 from "./images/weapons/weapon14.png";
import weapon15 from "./images/weapons/weapon15.png";
import weapon16 from "./images/weapons/weapon16.png";
import weapon17 from "./images/weapons/weapon17.png";
import weapon18 from "./images/weapons/weapon18.png";

import sWeapon1 from "./images/weapons/sWeapon1.png";
import sWeapon2 from "./images/weapons/sWeapon2.png";
import sWeapon3 from "./images/weapons/sWeapon3.png";
import sWeapon4 from "./images/weapons/sWeapon4.png";
import sWeapon5 from "./images/weapons/sWeapon5.png";
import sWeapon6 from "./images/weapons/sWeapon6.png";
import sWeapon7 from "./images/weapons/sWeapon7.png";
import sWeapon8 from "./images/weapons/sWeapon8.png";
import sWeapon9 from "./images/weapons/sWeapon9.png";
import sWeapon10 from "./images/weapons/sWeapon10.png";
import sWeapon11 from "./images/weapons/sWeapon11.png";

import shield0 from "./images/weapons/shield0.png";
import shield1 from "./images/weapons/shield1.png";
import shield2 from "./images/weapons/shield2.png";
import shield3 from "./images/weapons/shield3.png";
import shield4 from "./images/weapons/shield4.png";
import shield5 from "./images/weapons/shield5.png";
import shield6 from "./images/weapons/shield6.png";
import shield7 from "./images/weapons/shield7.png";
import shield8 from "./images/weapons/shield8.png";
import shield9 from "./images/weapons/shield9.png";
import shield10 from "./images/weapons/shield10.png";
import shield11 from "./images/weapons/shield11.png";

let items = {
  weapon: [
    {
      id: 0,
      name: "First knife",
      type: "First weapon",
      attack: [3],
      lvl: 1,
      img: weapon0,
      cost: 0,
    },
    {
      id: 1,
      name: "Pickaxe",
      type: "First weapon",
      attack: [4, 7],
      lvl: 1,
      img: weapon1,
      cost: 100,
    },
    {
      id: 2,
      name: "Basic sword",
      type: "First weapon",
      attack: [5, 8],
      lvl: 1,
      img: weapon2,
      cost: 130,
    },
    {
      id: 3,
      name: "Short sword",
      type: "First weapon",
      attack: [4, 9],
      lvl: 1,
      img: weapon3,
      cost: 130,
    },
    {
      id: 4,
      name: "Hand hammer",
      type: "First weapon",
      attack: [7, 10],
      lvl: 2,
      img: weapon4,
      cost: 200,
    },
    {
      id: 5,
      name: "Hammer",
      type: "First weapon",
      attack: [5, 12],
      lvl: 2,
      img: weapon5,
      cost: 200,
    },
    {
      id: 6,
      name: "Mace",
      type: "First weapon",
      attack: [9, 11],
      lvl: 3,
      img: weapon6,
      cost: 230,
    },
    {
      id: 7,
      name: "Furry club",
      type: "First weapon",
      attack: [12, 13],
      lvl: 4,
      img: weapon7,
      cost: 350,
    },
    {
      id: 8,
      name: "Broadsword",
      type: "First weapon",
      attack: [10, 13],
      lvl: 4,
      img: weapon8,
      cost: 350,
    },
    {
      id: 9,
      name: "Silver mace",
      type: "First weapon",
      attack: [13, 17],
      lvl: 5,
      img: weapon9,
      cost: 390,
    },
    {
      id: 10,
      name: "Katana",
      type: "First weapon",
      attack: [14, 15],
      lvl: 5,
      img: weapon10,
      cost: 390,
    },
    {
      id: 11,
      name: "Barbarian axe",
      type: "First weapon",
      attack: [16, 17],
      lvl: 6,
      img: weapon11,
      cost: 420,
    },
    {
      id: 12,
      name: "Sabre",
      type: "First weapon",
      attack: [17, 19],
      lvl: 7,
      img: weapon12,
      cost: 480,
    },
    {
      id: 13,
      name: "Epee",
      type: "First weapon",
      attack: [16, 21],
      lvl: 7,
      img: weapon13,
      cost: 500,
    },
    {
      id: 14,
      name: "Big sword",
      type: "First weapon",
      attack: [19, 20],
      lvl: 8,
      img: weapon14,
      cost: 600,
    },
    {
      id: 15,
      name: "Scimitar",
      type: "First weapon",
      attack: [13, 28],
      lvl: 9,
      img: weapon15,
      cost: 620,
    },
    {
      id: 16,
      name: "Warrior sabre",
      type: "First weapon",
      attack: [20],
      lvl: 9,
      img: weapon16,
      cost: 650,
    },
    {
      id: 17,
      name: "Warlord Sword",
      type: "First weapon",
      attack: [24],
      lvl: 10,
      img: weapon17,
      cost: 750,
    },
    {
      id: 18,
      name: "Halberd",
      type: "First weapon",
      attack: [22, 26],
      lvl: 10,
      img: weapon18,
      cost: 750,
    },
  ],
  shields: [
    {
      id: 18.5,
      name: "First shield",
      type: "shield",
      defense: 1,
      lvl: 1,
      img: shield0,
      cost: 0,
    },
    {
      id: 19,
      name: "Wooden shield",
      type: "shield",
      defense: 4,
      lvl: 1,
      img: shield1,
      cost: 100,
    },
    {
      id: 20,
      name: "Viking shield",
      type: "shield",
      defense: 5,
      lvl: 1,
      img: shield2,
      cost: 130,
    },
    {
      id: 21,
      name: "Sentinel shield",
      type: "shield",
      defense: 7,
      lvl: 2,
      img: shield3,
      cost: 200,
    },
    {
      id: 22,
      name: "Brass shield",
      type: "shield",
      defense: 8,
      lvl: 3,
      img: shield4,
      cost: 250,
    },
    {
      id: 23,
      name: "Castle shield",
      type: "shield",
      defense: 10,
      lvl: 4,
      img: shield5,
      cost: 290,
    },
    {
      id: 24,
      name: "Steel shield",
      type: "shield",
      defense: 11,
      lvl: 5,
      img: shield6,
      cost: 350,
    },
    {
      id: 25,
      name: "Tower shield",
      type: "shield",
      defense: 13,
      lvl: 6,
      img: shield7,
      cost: 450,
    },
    {
      id: 26,
      name: "Knight shield",
      type: "shield",
      defense: 14,
      lvl: 7,
      img: shield8,
      cost: 520,
    },
    {
      id: 27,
      name: "Guardian shield",
      type: "shield",
      defense: 15,
      lvl: 7,
      img: shield9,
      cost: 600,
    },
    {
      id: 28,
      name: "Great shield",
      type: "shield",
      defense: 16,
      lvl: 9,
      img: shield10,
      cost: 650,
    },
    {
      id: 29,
      name: "Ultimate shield",
      type: "shield",
      defense: 18,
      lvl: 10,
      img: shield11,
      cost: 750,
    },
  ],
  secondWeapon: [
    {
      id: 30,
      name: "Knife",
      type: "second weapon",
      attack: [3, 5],
      lvl: 1,
      img: sWeapon1,
      cost: 100,
    },
    {
      id: 31,
      name: "Hunting knife",
      type: "second weapon",
      attack: [4, 6],
      lvl: 1,
      img: sWeapon2,
      cost: 150,
    },
    {
      id: 32,
      name: "Short axe",
      type: "second weapon",
      attack: [6, 9],
      lvl: 2,
      img: sWeapon3,
      cost: 200,
    },
    {
      id: 33,
      name: "Sharp axe",
      type: "second weapon",
      attack: [7, 9],
      lvl: 3,
      img: sWeapon4,
      cost: 250,
    },
    {
      id: 34,
      name: "Dager",
      type: "second weapon",
      attack: [8, 10],
      lvl: 4,
      img: sWeapon5,
      cost: 320,
    },
    {
      id: 35,
      name: "Poisoned knife",
      type: "second weapon",
      attack: [10, 11],
      lvl: 5,
      img: sWeapon6,
      cost: 350,
    },
    {
      id: 36,
      name: "Butcher knife",
      type: "second weapon",
      attack: [9, 16],
      lvl: 6,
      img: sWeapon7,
      cost: 420,
    },
    {
      id: 37,
      name: "Umbral mace",
      type: "second weapon",
      attack: [11, 14],
      lvl: 7,
      img: sWeapon8,
      cost: 500,
    },
    {
      id: 38,
      name: "Onyx Flail",
      type: "second weapon",
      attack: [14, 16],
      lvl: 8,
      img: sWeapon9,
      cost: 600,
    },
    {
      id: 39,
      name: "Brutal sword",
      type: "second weapon",
      attack: [15, 18],
      lvl: 9,
      img: sWeapon10,
      cost: 700,
    },
    {
      id: 40,
      name: "Assassin knife",
      type: "second weapon",
      attack: [17],
      lvl: 10,
      img: sWeapon11,
      cost: 750,
    },
  ],
};

export default items;
