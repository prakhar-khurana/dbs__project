import React, { useState, useEffect } from 'react';
import { Flex, Box, Input, Heading, Text } from '@chakra-ui/react';
import Cards12 from './profile'; // Import your card component
import logo from './images/Logo Profile page.svg'; 
import { ChakraProvider } from '@chakra-ui/react';


const JsonData=[
    {
      "name": "bulbasaur",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": "ivysaur"
    },
    {
      "name": "ivysaur",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": "venusaur"
    },
    {
      "name": "venusaur",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "charmander",
      "type1": "Fire",
      "type2": "",
      "evolution": "charmeleon"
    },
    {
      "name": "charmeleon",
      "type1": "Fire",
      "type2": "",
      "evolution": "charizard"
    },
    {
      "name": "charizard",
      "type1": "Fire",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "squirtle",
      "type1": "Water",
      "type2": "",
      "evolution": "wartortle"
    },
    {
      "name": "wartortle",
      "type1": "Water",
      "type2": "",
      "evolution": "blastoise"
    },
    {
      "name": "blastoise",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "caterpie",
      "type1": "Bug",
      "type2": "",
      "evolution": "metapod"
    },
    {
      "name": "metapod",
      "type1": "Bug",
      "type2": "",
      "evolution": "butterfree"
    },
    {
      "name": "butterfree",
      "type1": "Bug",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "weedle",
      "type1": "Bug",
      "type2": "Poison",
      "evolution": "kakuna"
    },
    {
      "name": "kakuna",
      "type1": "Bug",
      "type2": "Poison",
      "evolution": "beedrill"
    },
    {
      "name": "beedrill",
      "type1": "Bug",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "pidgey",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": "pidgeotto"
    },
    {
      "name": "pidgeotto",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": "pidgeot"
    },
    {
      "name": "pidgeot",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "rattata",
      "type1": "Normal",
      "type2": "",
      "evolution": "raticate"
    },
    {
      "name": "raticate",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "spearow",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": "fearow"
    },
    {
      "name": "fearow",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "ekans",
      "type1": "Poison",
      "type2": "",
      "evolution": "arbok"
    },
    {
      "name": "arbok",
      "type1": "Poison",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "pikachu",
      "type1": "Electric",
      "type2": "",
      "evolution": "raichu"
    },
    {
      "name": "raichu",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "sandshrew",
      "type1": "Ground",
      "type2": "",
      "evolution": "sandslash"
    },
    {
      "name": "sandslash",
      "type1": "Ground",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "nidoran-f",
      "type1": "Poison",
      "type2": "",
      "evolution": "nidorina"
    },
    {
      "name": "nidorina",
      "type1": "Poison",
      "type2": "",
      "evolution": "nidoqueen"
    },
    {
      "name": "nidoqueen",
      "type1": "Poison",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "nidoran-m",
      "type1": "Poison",
      "type2": "",
      "evolution": "nidorino"
    },
    {
      "name": "nidorino",
      "type1": "Poison",
      "type2": "",
      "evolution": "nidoking"
    },
    {
      "name": "nidoking",
      "type1": "Poison",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "clefairy",
      "type1": "Fairy",
      "type2": "",
      "evolution": "clefable"
    },
    {
      "name": "clefable",
      "type1": "Fairy",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "vulpix",
      "type1": "Fire",
      "type2": "",
      "evolution": "ninetales"
    },
    {
      "name": "ninetales",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "jigglypuff",
      "type1": "Normal",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "wigglytuff",
      "type1": "Normal",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "zubat",
      "type1": "Poison",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "golbat",
      "type1": "Poison",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "oddish",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "gloom",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "vileplume",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "paras",
      "type1": "Bug",
      "type2": "Grass",
      "evolution": ""
    },
    {
      "name": "parasect",
      "type1": "Bug",
      "type2": "Grass",
      "evolution": ""
    },
    {
      "name": "venonat",
      "type1": "Bug",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "venomoth",
      "type1": "Bug",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "diglett",
      "type1": "Ground",
      "type2": "",
      "evolution": "dugtrio"
    },
    {
      "name": "dugtrio",
      "type1": "Ground",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "meowth",
      "type1": "Normal",
      "type2": "",
      "evolution": "persian"
    },
    {
      "name": "persian",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "psyduck",
      "type1": "Water",
      "type2": "",
      "evolution": "golduck"
    },
    {
      "name": "golduck",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "mankey",
      "type1": "Fighting",
      "type2": "",
      "evolution": "primeape"
    },
    {
      "name": "primeape",
      "type1": "Fighting",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "growlithe",
      "type1": "Fire",
      "type2": "",
      "evolution": "arcanine"
    },
    {
      "name": "arcanine",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "poliwag",
      "type1": "Water",
      "type2": "",
      "evolution": "poliwhirl"
    },
    {
      "name": "poliwhirl",
      "type1": "Water",
      "type2": "",
      "evolution": "poliwrath"
    },
    {
      "name": "poliwrath",
      "type1": "Water",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "abra",
      "type1": "Psychic",
      "type2": "",
      "evolution": "kadabra"
    },
    {
      "name": "kadabra",
      "type1": "Psychic",
      "type2": "",
      "evolution": "alakazam"
    },
    {
      "name": "alakazam",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "machop",
      "type1": "Fighting",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "machoke",
      "type1": "Fighting",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "machamp",
      "type1": "Fighting",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "bellsprout",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "weepinbell",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "victreebel",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "tentacool",
      "type1": "Water",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "tentacruel",
      "type1": "Water",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "geodude",
      "type1": "Rock",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "graveler",
      "type1": "Rock",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "golem",
      "type1": "Rock",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "ponyta",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "rapidash",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "slowpoke",
      "type1": "Water",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "slowbro",
      "type1": "Water",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "magnemite",
      "type1": "Electric",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "magneton",
      "type1": "Electric",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "farfetchd",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "doduo",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "dodrio",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "seel",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "dewgong",
      "type1": "Water",
      "type2": "Ice",
      "evolution": ""
    },
    {
      "name": "grimer",
      "type1": "Poison",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "muk",
      "type1": "Poison",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "shellder",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "cloyster",
      "type1": "Water",
      "type2": "Ice",
      "evolution": ""
    },
    {
      "name": "gastly",
      "type1": "Ghost",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "haunter",
      "type1": "Ghost",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "gengar",
      "type1": "Ghost",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "onix",
      "type1": "Rock",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "drowzee",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "hypno",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "krabby",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "kingler",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "voltorb",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "electrode",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "exeggcute",
      "type1": "Grass",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "exeggutor",
      "type1": "Grass",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "cubone",
      "type1": "Ground",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "marowak",
      "type1": "Ground",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "hitmonlee",
      "type1": "Fighting",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "hitmonchan",
      "type1": "Fighting",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "lickitung",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "koffing",
      "type1": "Poison",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "weezing",
      "type1": "Poison",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "rhyhorn",
      "type1": "Ground",
      "type2": "Rock",
      "evolution": ""
    },
    {
      "name": "rhydon",
      "type1": "Ground",
      "type2": "Rock",
      "evolution": ""
    },
    {
      "name": "chansey",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "tangela",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "kangaskhan",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "horsea",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "seadra",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "goldeen",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "seaking",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "staryu",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "starmie",
      "type1": "Water",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "mr-mime",
      "type1": "Psychic",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "scyther",
      "type1": "Bug",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "jynx",
      "type1": "Ice",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "electabuzz",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "magmar",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "pinsir",
      "type1": "Bug",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "tauros",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "magikarp",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "gyarados",
      "type1": "Water",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "lapras",
      "type1": "Water",
      "type2": "Ice",
      "evolution": ""
    },
    {
      "name": "ditto",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "eevee",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "vaporeon",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "jolteon",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "flareon",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "porygon",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "omanyte",
      "type1": "Rock",
      "type2": "Water",
      "evolution": ""
    },
    {
      "name": "omastar",
      "type1": "Rock",
      "type2": "Water",
      "evolution": ""
    },
    {
      "name": "kabuto",
      "type1": "Rock",
      "type2": "Water",
      "evolution": ""
    },
    {
      "name": "kabutops",
      "type1": "Rock",
      "type2": "Water",
      "evolution": ""
    },
    {
      "name": "aerodactyl",
      "type1": "Rock",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "snorlax",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "articuno",
      "type1": "Ice",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "zapdos",
      "type1": "Electric",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "moltres",
      "type1": "Fire",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "dratini",
      "type1": "Dragon",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "dragonair",
      "type1": "Dragon",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "dragonite",
      "type1": "Dragon",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "mewtwo",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "mew",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "chikorita",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "bayleef",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "meganium",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "cyndaquil",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "quilava",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "typhlosion",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "totodile",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "croconaw",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "feraligatr",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "sentret",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "furret",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "hoothoot",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "noctowl",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "ledyba",
      "type1": "Bug",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "ledian",
      "type1": "Bug",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "spinarak",
      "type1": "Bug",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "ariados",
      "type1": "Bug",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "crobat",
      "type1": "Poison",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "chinchou",
      "type1": "Water",
      "type2": "Electric",
      "evolution": ""
    },
    {
      "name": "lanturn",
      "type1": "Water",
      "type2": "Electric",
      "evolution": ""
    },
    {
      "name": "pichu",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "cleffa",
      "type1": "Fairy",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "igglybuff",
      "type1": "Normal",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "togepi",
      "type1": "Fairy",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "togetic",
      "type1": "Fairy",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "natu",
      "type1": "Psychic",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "xatu",
      "type1": "Psychic",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "mareep",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "flaaffy",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "ampharos",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "bellossom",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "marill",
      "type1": "Water",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "azumarill",
      "type1": "Water",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "sudowoodo",
      "type1": "Rock",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "politoed",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "hoppip",
      "type1": "Grass",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "skiploom",
      "type1": "Grass",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "jumpluff",
      "type1": "Grass",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "aipom",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "sunkern",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "sunflora",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "yanma",
      "type1": "Bug",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "wooper",
      "type1": "Water",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "quagsire",
      "type1": "Water",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "espeon",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "umbreon",
      "type1": "Dark",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "murkrow",
      "type1": "Dark",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "slowking",
      "type1": "Water",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "misdreavus",
      "type1": "Ghost",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "unown",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "wobbuffet",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "girafarig",
      "type1": "Normal",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "pineco",
      "type1": "Bug",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "forretress",
      "type1": "Bug",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "dunsparce",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "gligar",
      "type1": "Ground",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "steelix",
      "type1": "Steel",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "snubbull",
      "type1": "Fairy",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "granbull",
      "type1": "Fairy",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "qwilfish",
      "type1": "Water",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "scizor",
      "type1": "Bug",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "shuckle",
      "type1": "Bug",
      "type2": "Rock",
      "evolution": ""
    },
    {
      "name": "heracross",
      "type1": "Bug",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "sneasel",
      "type1": "Dark",
      "type2": "Ice",
      "evolution": ""
    },
    {
      "name": "teddiursa",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "ursaring",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "slugma",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "magcargo",
      "type1": "Fire",
      "type2": "Rock",
      "evolution": ""
    },
    {
      "name": "swinub",
      "type1": "Ice",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "piloswine",
      "type1": "Ice",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "corsola",
      "type1": "Water",
      "type2": "Rock",
      "evolution": ""
    },
    {
      "name": "remoraid",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "octillery",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "delibird",
      "type1": "Ice",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "mantine",
      "type1": "Water",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "skarmory",
      "type1": "Steel",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "houndour",
      "type1": "Dark",
      "type2": "Fire",
      "evolution": ""
    },
    {
      "name": "houndoom",
      "type1": "Dark",
      "type2": "Fire",
      "evolution": ""
    },
    {
      "name": "kingdra",
      "type1": "Water",
      "type2": "Dragon",
      "evolution": ""
    },
    {
      "name": "phanpy",
      "type1": "Ground",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "donphan",
      "type1": "Ground",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "porygon2",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "stantler",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "smeargle",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "tyrogue",
      "type1": "Fighting",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "hitmontop",
      "type1": "Fighting",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "smoochum",
      "type1": "Ice",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "elekid",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "magby",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "miltank",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "blissey",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "raikou",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "entei",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "suicune",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "larvitar",
      "type1": "Rock",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "pupitar",
      "type1": "Rock",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "tyranitar",
      "type1": "Rock",
      "type2": "Dark",
      "evolution": ""
    },
    {
      "name": "lugia",
      "type1": "Psychic",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "ho-oh",
      "type1": "Fire",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "celebi",
      "type1": "Psychic",
      "type2": "Grass",
      "evolution": ""
    },
    {
      "name": "treecko",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "grovyle",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "sceptile",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "torchic",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "combusken",
      "type1": "Fire",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "blaziken",
      "type1": "Fire",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "mudkip",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "marshtomp",
      "type1": "Water",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "swampert",
      "type1": "Water",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "poochyena",
      "type1": "Dark",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "mightyena",
      "type1": "Dark",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "zigzagoon",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "linoone",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "wurmple",
      "type1": "Bug",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "silcoon",
      "type1": "Bug",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "beautifly",
      "type1": "Bug",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "cascoon",
      "type1": "Bug",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "dustox",
      "type1": "Bug",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "lotad",
      "type1": "Water",
      "type2": "Grass",
      "evolution": ""
    },
    {
      "name": "lombre",
      "type1": "Water",
      "type2": "Grass",
      "evolution": ""
    },
    {
      "name": "ludicolo",
      "type1": "Water",
      "type2": "Grass",
      "evolution": ""
    },
    {
      "name": "seedot",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "nuzleaf",
      "type1": "Grass",
      "type2": "Dark",
      "evolution": ""
    },
    {
      "name": "shiftry",
      "type1": "Grass",
      "type2": "Dark",
      "evolution": ""
    },
    {
      "name": "taillow",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "swellow",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "wingull",
      "type1": "Water",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "pelipper",
      "type1": "Water",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "ralts",
      "type1": "Psychic",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "kirlia",
      "type1": "Psychic",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "gardevoir",
      "type1": "Psychic",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "surskit",
      "type1": "Bug",
      "type2": "Water",
      "evolution": ""
    },
    {
      "name": "masquerain",
      "type1": "Bug",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "shroomish",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "breloom",
      "type1": "Grass",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "slakoth",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "vigoroth",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "slaking",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "nincada",
      "type1": "Bug",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "ninjask",
      "type1": "Bug",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "shedinja",
      "type1": "Bug",
      "type2": "Ghost",
      "evolution": ""
    },
    {
      "name": "whismur",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "loudred",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "exploud",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "makuhita",
      "type1": "Fighting",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "hariyama",
      "type1": "Fighting",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "azurill",
      "type1": "Normal",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "nosepass",
      "type1": "Rock",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "skitty",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "delcatty",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "sableye",
      "type1": "Dark",
      "type2": "Ghost",
      "evolution": ""
    },
    {
      "name": "mawile",
      "type1": "Steel",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "aron",
      "type1": "Steel",
      "type2": "Rock",
      "evolution": ""
    },
    {
      "name": "lairon",
      "type1": "Steel",
      "type2": "Rock",
      "evolution": ""
    },
    {
      "name": "aggron",
      "type1": "Steel",
      "type2": "Rock",
      "evolution": ""
    },
    {
      "name": "meditite",
      "type1": "Fighting",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "medicham",
      "type1": "Fighting",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "electrike",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "manectric",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "plusle",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "minun",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "volbeat",
      "type1": "Bug",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "illumise",
      "type1": "Bug",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "roselia",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "gulpin",
      "type1": "Poison",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "swalot",
      "type1": "Poison",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "carvanha",
      "type1": "Water",
      "type2": "Dark",
      "evolution": ""
    },
    {
      "name": "sharpedo",
      "type1": "Water",
      "type2": "Dark",
      "evolution": ""
    },
    {
      "name": "wailmer",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "wailord",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "numel",
      "type1": "Fire",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "camerupt",
      "type1": "Fire",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "torkoal",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "spoink",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "grumpig",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "spinda",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "trapinch",
      "type1": "Ground",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "vibrava",
      "type1": "Ground",
      "type2": "Dragon",
      "evolution": ""
    },
    {
      "name": "flygon",
      "type1": "Ground",
      "type2": "Dragon",
      "evolution": ""
    },
    {
      "name": "cacnea",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "cacturne",
      "type1": "Grass",
      "type2": "Dark",
      "evolution": ""
    },
    {
      "name": "swablu",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "altaria",
      "type1": "Dragon",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "zangoose",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "seviper",
      "type1": "Poison",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "lunatone",
      "type1": "Rock",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "solrock",
      "type1": "Rock",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "barboach",
      "type1": "Water",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "whiscash",
      "type1": "Water",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "corphish",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "crawdaunt",
      "type1": "Water",
      "type2": "Dark",
      "evolution": ""
    },
    {
      "name": "baltoy",
      "type1": "Ground",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "claydol",
      "type1": "Ground",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "lileep",
      "type1": "Rock",
      "type2": "Grass",
      "evolution": ""
    },
    {
      "name": "cradily",
      "type1": "Rock",
      "type2": "Grass",
      "evolution": ""
    },
    {
      "name": "anorith",
      "type1": "Rock",
      "type2": "Bug",
      "evolution": ""
    },
    {
      "name": "armaldo",
      "type1": "Rock",
      "type2": "Bug",
      "evolution": ""
    },
    {
      "name": "feebas",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "milotic",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "castform",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "kecleon",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "shuppet",
      "type1": "Ghost",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "banette",
      "type1": "Ghost",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "duskull",
      "type1": "Ghost",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "dusclops",
      "type1": "Ghost",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "tropius",
      "type1": "Grass",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "chimecho",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "absol",
      "type1": "Dark",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "wynaut",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "snorunt",
      "type1": "Ice",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "glalie",
      "type1": "Ice",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "spheal",
      "type1": "Ice",
      "type2": "Water",
      "evolution": ""
    },
    {
      "name": "sealeo",
      "type1": "Ice",
      "type2": "Water",
      "evolution": ""
    },
    {
      "name": "walrein",
      "type1": "Ice",
      "type2": "Water",
      "evolution": ""
    },
    {
      "name": "clamperl",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "huntail",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "gorebyss",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "relicanth",
      "type1": "Water",
      "type2": "Rock",
      "evolution": ""
    },
    {
      "name": "luvdisc",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "bagon",
      "type1": "Dragon",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "shelgon",
      "type1": "Dragon",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "salamence",
      "type1": "Dragon",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "beldum",
      "type1": "Steel",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "metang",
      "type1": "Steel",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "metagross",
      "type1": "Steel",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "regirock",
      "type1": "Rock",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "regice",
      "type1": "Ice",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "registeel",
      "type1": "Steel",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "latias",
      "type1": "Dragon",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "latios",
      "type1": "Dragon",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "kyogre",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "groudon",
      "type1": "Ground",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "rayquaza",
      "type1": "Dragon",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "jirachi",
      "type1": "Steel",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "deoxys-normal",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "turtwig",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "grotle",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "torterra",
      "type1": "Grass",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "chimchar",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "monferno",
      "type1": "Fire",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "infernape",
      "type1": "Fire",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "piplup",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "prinplup",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "empoleon",
      "type1": "Water",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "starly",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "staravia",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "staraptor",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "bidoof",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "bibarel",
      "type1": "Normal",
      "type2": "Water",
      "evolution": ""
    },
    {
      "name": "kricketot",
      "type1": "Bug",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "kricketune",
      "type1": "Bug",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "shinx",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "luxio",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "luxray",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "budew",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "roserade",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "cranidos",
      "type1": "Rock",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "rampardos",
      "type1": "Rock",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "shieldon",
      "type1": "Rock",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "bastiodon",
      "type1": "Rock",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "burmy",
      "type1": "Bug",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "wormadam-plant",
      "type1": "Bug",
      "type2": "Grass",
      "evolution": ""
    },
    {
      "name": "mothim",
      "type1": "Bug",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "combee",
      "type1": "Bug",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "vespiquen",
      "type1": "Bug",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "pachirisu",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "buizel",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "floatzel",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "cherubi",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "cherrim",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "shellos",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "gastrodon",
      "type1": "Water",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "ambipom",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "drifloon",
      "type1": "Ghost",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "drifblim",
      "type1": "Ghost",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "buneary",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "lopunny",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "mismagius",
      "type1": "Ghost",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "honchkrow",
      "type1": "Dark",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "glameow",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "purugly",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "chingling",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "stunky",
      "type1": "Poison",
      "type2": "Dark",
      "evolution": ""
    },
    {
      "name": "skuntank",
      "type1": "Poison",
      "type2": "Dark",
      "evolution": ""
    },
    {
      "name": "bronzor",
      "type1": "Steel",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "bronzong",
      "type1": "Steel",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "bonsly",
      "type1": "Rock",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "mime-jr",
      "type1": "Psychic",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "happiny",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "chatot",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "spiritomb",
      "type1": "Ghost",
      "type2": "Dark",
      "evolution": ""
    },
    {
      "name": "gible",
      "type1": "Dragon",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "gabite",
      "type1": "Dragon",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "garchomp",
      "type1": "Dragon",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "munchlax",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "riolu",
      "type1": "Fighting",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "lucario",
      "type1": "Fighting",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "hippopotas",
      "type1": "Ground",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "hippowdon",
      "type1": "Ground",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "skorupi",
      "type1": "Poison",
      "type2": "Bug",
      "evolution": ""
    },
    {
      "name": "drapion",
      "type1": "Poison",
      "type2": "Dark",
      "evolution": ""
    },
    {
      "name": "croagunk",
      "type1": "Poison",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "toxicroak",
      "type1": "Poison",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "carnivine",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "finneon",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "lumineon",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "mantyke",
      "type1": "Water",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "snover",
      "type1": "Grass",
      "type2": "Ice",
      "evolution": ""
    },
    {
      "name": "abomasnow",
      "type1": "Grass",
      "type2": "Ice",
      "evolution": ""
    },
    {
      "name": "weavile",
      "type1": "Dark",
      "type2": "Ice",
      "evolution": ""
    },
    {
      "name": "magnezone",
      "type1": "Electric",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "lickilicky",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "rhyperior",
      "type1": "Ground",
      "type2": "Rock",
      "evolution": ""
    },
    {
      "name": "tangrowth",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "electivire",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "magmortar",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "togekiss",
      "type1": "Fairy",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "yanmega",
      "type1": "Bug",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "leafeon",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "glaceon",
      "type1": "Ice",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "gliscor",
      "type1": "Ground",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "mamoswine",
      "type1": "Ice",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "porygon-z",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "gallade",
      "type1": "Psychic",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "probopass",
      "type1": "Rock",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "dusknoir",
      "type1": "Ghost",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "froslass",
      "type1": "Ice",
      "type2": "Ghost",
      "evolution": ""
    },
    {
      "name": "rotom",
      "type1": "Electric",
      "type2": "Ghost",
      "evolution": ""
    },
    {
      "name": "uxie",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "mesprit",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "azelf",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "dialga",
      "type1": "Steel",
      "type2": "Dragon",
      "evolution": ""
    },
    {
      "name": "palkia",
      "type1": "Water",
      "type2": "Dragon",
      "evolution": ""
    },
    {
      "name": "heatran",
      "type1": "Fire",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "regigigas",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "giratina-altered",
      "type1": "Ghost",
      "type2": "Dragon",
      "evolution": ""
    },
    {
      "name": "cresselia",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "phione",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "manaphy",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "darkrai",
      "type1": "Dark",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "shaymin-land",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "arceus",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "victini",
      "type1": "Psychic",
      "type2": "Fire",
      "evolution": ""
    },
    {
      "name": "snivy",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "servine",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "serperior",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "tepig",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "pignite",
      "type1": "Fire",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "emboar",
      "type1": "Fire",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "oshawott",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "dewott",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "samurott",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "patrat",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "watchog",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "lillipup",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "herdier",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "stoutland",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "purrloin",
      "type1": "Dark",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "liepard",
      "type1": "Dark",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "pansage",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "simisage",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "pansear",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "simisear",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "panpour",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "simipour",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "munna",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "musharna",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "pidove",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "tranquill",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "unfezant",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "blitzle",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "zebstrika",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "roggenrola",
      "type1": "Rock",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "boldore",
      "type1": "Rock",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "gigalith",
      "type1": "Rock",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "woobat",
      "type1": "Psychic",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "swoobat",
      "type1": "Psychic",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "drilbur",
      "type1": "Ground",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "excadrill",
      "type1": "Ground",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "audino",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "timburr",
      "type1": "Fighting",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "gurdurr",
      "type1": "Fighting",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "conkeldurr",
      "type1": "Fighting",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "tympole",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "palpitoad",
      "type1": "Water",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "seismitoad",
      "type1": "Water",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "throh",
      "type1": "Fighting",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "sawk",
      "type1": "Fighting",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "sewaddle",
      "type1": "Bug",
      "type2": "Grass",
      "evolution": ""
    },
    {
      "name": "swadloon",
      "type1": "Bug",
      "type2": "Grass",
      "evolution": ""
    },
    {
      "name": "leavanny",
      "type1": "Bug",
      "type2": "Grass",
      "evolution": ""
    },
    {
      "name": "venipede",
      "type1": "Bug",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "whirlipede",
      "type1": "Bug",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "scolipede",
      "type1": "Bug",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "cottonee",
      "type1": "Grass",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "whimsicott",
      "type1": "Grass",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "petilil",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "lilligant",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "basculin-red-striped",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "sandile",
      "type1": "Ground",
      "type2": "Dark",
      "evolution": ""
    },
    {
      "name": "krokorok",
      "type1": "Ground",
      "type2": "Dark",
      "evolution": ""
    },
    {
      "name": "krookodile",
      "type1": "Ground",
      "type2": "Dark",
      "evolution": ""
    },
    {
      "name": "darumaka",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "darmanitan-standard",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "maractus",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "dwebble",
      "type1": "Bug",
      "type2": "Rock",
      "evolution": ""
    },
    {
      "name": "crustle",
      "type1": "Bug",
      "type2": "Rock",
      "evolution": ""
    },
    {
      "name": "scraggy",
      "type1": "Dark",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "scrafty",
      "type1": "Dark",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "sigilyph",
      "type1": "Psychic",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "yamask",
      "type1": "Ghost",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "cofagrigus",
      "type1": "Ghost",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "tirtouga",
      "type1": "Water",
      "type2": "Rock",
      "evolution": ""
    },
    {
      "name": "carracosta",
      "type1": "Water",
      "type2": "Rock",
      "evolution": ""
    },
    {
      "name": "archen",
      "type1": "Rock",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "archeops",
      "type1": "Rock",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "trubbish",
      "type1": "Poison",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "garbodor",
      "type1": "Poison",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "zorua",
      "type1": "Dark",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "zoroark",
      "type1": "Dark",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "minccino",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "cinccino",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "gothita",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "gothorita",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "gothitelle",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "solosis",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "duosion",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "reuniclus",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "ducklett",
      "type1": "Water",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "swanna",
      "type1": "Water",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "vanillite",
      "type1": "Ice",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "vanillish",
      "type1": "Ice",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "vanilluxe",
      "type1": "Ice",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "deerling",
      "type1": "Normal",
      "type2": "Grass",
      "evolution": ""
    },
    {
      "name": "sawsbuck",
      "type1": "Normal",
      "type2": "Grass",
      "evolution": ""
    },
    {
      "name": "emolga",
      "type1": "Electric",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "karrablast",
      "type1": "Bug",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "escavalier",
      "type1": "Bug",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "foongus",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "amoonguss",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "frillish",
      "type1": "Water",
      "type2": "Ghost",
      "evolution": ""
    },
    {
      "name": "jellicent",
      "type1": "Water",
      "type2": "Ghost",
      "evolution": ""
    },
    {
      "name": "alomomola",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "joltik",
      "type1": "Bug",
      "type2": "Electric",
      "evolution": ""
    },
    {
      "name": "galvantula",
      "type1": "Bug",
      "type2": "Electric",
      "evolution": ""
    },
    {
      "name": "ferroseed",
      "type1": "Grass",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "ferrothorn",
      "type1": "Grass",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "klink",
      "type1": "Steel",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "klang",
      "type1": "Steel",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "klinklang",
      "type1": "Steel",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "tynamo",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "eelektrik",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "eelektross",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "elgyem",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "beheeyem",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "litwick",
      "type1": "Ghost",
      "type2": "Fire",
      "evolution": ""
    },
    {
      "name": "lampent",
      "type1": "Ghost",
      "type2": "Fire",
      "evolution": ""
    },
    {
      "name": "chandelure",
      "type1": "Ghost",
      "type2": "Fire",
      "evolution": ""
    },
    {
      "name": "axew",
      "type1": "Dragon",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "fraxure",
      "type1": "Dragon",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "haxorus",
      "type1": "Dragon",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "cubchoo",
      "type1": "Ice",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "beartic",
      "type1": "Ice",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "cryogonal",
      "type1": "Ice",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "shelmet",
      "type1": "Bug",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "accelgor",
      "type1": "Bug",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "stunfisk",
      "type1": "Ground",
      "type2": "Electric",
      "evolution": ""
    },
    {
      "name": "mienfoo",
      "type1": "Fighting",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "mienshao",
      "type1": "Fighting",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "druddigon",
      "type1": "Dragon",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "golett",
      "type1": "Ground",
      "type2": "Ghost",
      "evolution": ""
    },
    {
      "name": "golurk",
      "type1": "Ground",
      "type2": "Ghost",
      "evolution": ""
    },
    {
      "name": "pawniard",
      "type1": "Dark",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "bisharp",
      "type1": "Dark",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "bouffalant",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "rufflet",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "braviary",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "vullaby",
      "type1": "Dark",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "mandibuzz",
      "type1": "Dark",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "heatmor",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "durant",
      "type1": "Bug",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "deino",
      "type1": "Dark",
      "type2": "Dragon",
      "evolution": ""
    },
    {
      "name": "zweilous",
      "type1": "Dark",
      "type2": "Dragon",
      "evolution": ""
    },
    {
      "name": "hydreigon",
      "type1": "Dark",
      "type2": "Dragon",
      "evolution": ""
    },
    {
      "name": "larvesta",
      "type1": "Bug",
      "type2": "Fire",
      "evolution": ""
    },
    {
      "name": "volcarona",
      "type1": "Bug",
      "type2": "Fire",
      "evolution": ""
    },
    {
      "name": "cobalion",
      "type1": "Steel",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "terrakion",
      "type1": "Rock",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "virizion",
      "type1": "Grass",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "tornadus-incarnate",
      "type1": "Flying",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "thundurus-incarnate",
      "type1": "Electric",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "reshiram",
      "type1": "Dragon",
      "type2": "Fire",
      "evolution": ""
    },
    {
      "name": "zekrom",
      "type1": "Dragon",
      "type2": "Electric",
      "evolution": ""
    },
    {
      "name": "landorus-incarnate",
      "type1": "Ground",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "kyurem",
      "type1": "Dragon",
      "type2": "Ice",
      "evolution": ""
    },
    {
      "name": "keldeo-ordinary",
      "type1": "Water",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "meloetta-aria",
      "type1": "Normal",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "genesect",
      "type1": "Bug",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "chespin",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "quilladin",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "chesnaught",
      "type1": "Grass",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "fennekin",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "braixen",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "delphox",
      "type1": "Fire",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "froakie",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "frogadier",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "greninja",
      "type1": "Water",
      "type2": "Dark",
      "evolution": ""
    },
    {
      "name": "bunnelby",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "diggersby",
      "type1": "Normal",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "fletchling",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "fletchinder",
      "type1": "Fire",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "talonflame",
      "type1": "Fire",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "scatterbug",
      "type1": "Bug",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "spewpa",
      "type1": "Bug",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "vivillon",
      "type1": "Bug",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "litleo",
      "type1": "Fire",
      "type2": "Normal",
      "evolution": ""
    },
    {
      "name": "pyroar",
      "type1": "Fire",
      "type2": "Normal",
      "evolution": ""
    },
    {
      "name": "flabebe",
      "type1": "Fairy",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "floette",
      "type1": "Fairy",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "florges",
      "type1": "Fairy",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "skiddo",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "gogoat",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "pancham",
      "type1": "Fighting",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "pangoro",
      "type1": "Fighting",
      "type2": "Dark",
      "evolution": ""
    },
    {
      "name": "furfrou",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "espurr",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "meowstic-male",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "honedge",
      "type1": "Steel",
      "type2": "Ghost",
      "evolution": ""
    },
    {
      "name": "doublade",
      "type1": "Steel",
      "type2": "Ghost",
      "evolution": ""
    },
    {
      "name": "aegislash-blade",
      "type1": "Steel",
      "type2": "Ghost",
      "evolution": ""
    },
    {
      "name": "spritzee",
      "type1": "Fairy",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "aromatisse",
      "type1": "Fairy",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "swirlix",
      "type1": "Fairy",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "slurpuff",
      "type1": "Fairy",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "inkay",
      "type1": "Dark",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "malamar",
      "type1": "Dark",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "binacle",
      "type1": "Rock",
      "type2": "Water",
      "evolution": ""
    },
    {
      "name": "barbaracle",
      "type1": "Rock",
      "type2": "Water",
      "evolution": ""
    },
    {
      "name": "skrelp",
      "type1": "Poison",
      "type2": "Water",
      "evolution": ""
    },
    {
      "name": "dragalge",
      "type1": "Poison",
      "type2": "Dragon",
      "evolution": ""
    },
    {
      "name": "clauncher",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "clawitzer",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "helioptile",
      "type1": "Electric",
      "type2": "Normal",
      "evolution": ""
    },
    {
      "name": "heliolisk",
      "type1": "Electric",
      "type2": "Normal",
      "evolution": ""
    },
    {
      "name": "tyrunt",
      "type1": "Rock",
      "type2": "Dragon",
      "evolution": ""
    },
    {
      "name": "tyrantrum",
      "type1": "Rock",
      "type2": "Dragon",
      "evolution": ""
    },
    {
      "name": "amaura",
      "type1": "Rock",
      "type2": "Ice",
      "evolution": ""
    },
    {
      "name": "aurorus",
      "type1": "Rock",
      "type2": "Ice",
      "evolution": ""
    },
    {
      "name": "sylveon",
      "type1": "Fairy",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "hawlucha",
      "type1": "Fighting",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "dedenne",
      "type1": "Electric",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "carbink",
      "type1": "Rock",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "goomy",
      "type1": "Dragon",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "sliggoo",
      "type1": "Dragon",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "goodra",
      "type1": "Dragon",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "klefki",
      "type1": "Steel",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "phantump",
      "type1": "Ghost",
      "type2": "Grass",
      "evolution": ""
    },
    {
      "name": "trevenant",
      "type1": "Ghost",
      "type2": "Grass",
      "evolution": ""
    },
    {
      "name": "pumpkaboo-average",
      "type1": "Ghost",
      "type2": "Grass",
      "evolution": ""
    },
    {
      "name": "gourgeist-average",
      "type1": "Ghost",
      "type2": "Grass",
      "evolution": ""
    },
    {
      "name": "bergmite",
      "type1": "Ice",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "avalugg",
      "type1": "Ice",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "noibat",
      "type1": "Flying",
      "type2": "Dragon",
      "evolution": ""
    },
    {
      "name": "noivern",
      "type1": "Flying",
      "type2": "Dragon",
      "evolution": ""
    },
    {
      "name": "xerneas",
      "type1": "Fairy",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "yveltal",
      "type1": "Dark",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "zygarde-50",
      "type1": "Dragon",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "diancie",
      "type1": "Rock",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "hoopa-confined",
      "type1": "Psychic",
      "type2": "Ghost",
      "evolution": ""
    },
    {
      "name": "volcanion",
      "type1": "Fire",
      "type2": "Water",
      "evolution": ""
    },
    {
      "name": "rowlet",
      "type1": "Grass",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "dartrix",
      "type1": "Grass",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "decidueye",
      "type1": "Grass",
      "type2": "Ghost",
      "evolution": ""
    },
    {
      "name": "litten",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "torracat",
      "type1": "Fire",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "incineroar",
      "type1": "Fire",
      "type2": "Dark",
      "evolution": ""
    },
    {
      "name": "popplio",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "brionne",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "primarina",
      "type1": "Water",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "pikipek",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "trumbeak",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "toucannon",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "yungoos",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "gumshoos",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "grubbin",
      "type1": "Bug",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "charjabug",
      "type1": "Bug",
      "type2": "Electric",
      "evolution": ""
    },
    {
      "name": "vikavolt",
      "type1": "Bug",
      "type2": "Electric",
      "evolution": ""
    },
    {
      "name": "crabrawler",
      "type1": "Fighting",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "crabominable",
      "type1": "Fighting",
      "type2": "Ice",
      "evolution": ""
    },
    {
      "name": "oricorio-baile",
      "type1": "Fire",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "cutiefly",
      "type1": "Bug",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "ribombee",
      "type1": "Bug",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "rockruff",
      "type1": "Rock",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "lycanroc-midday",
      "type1": "Rock",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "wishiwashi-solo",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "mareanie",
      "type1": "Poison",
      "type2": "Water",
      "evolution": ""
    },
    {
      "name": "toxapex",
      "type1": "Poison",
      "type2": "Water",
      "evolution": ""
    },
    {
      "name": "mudbray",
      "type1": "Ground",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "mudsdale",
      "type1": "Ground",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "dewpider",
      "type1": "Water",
      "type2": "Bug",
      "evolution": ""
    },
    {
      "name": "araquanid",
      "type1": "Water",
      "type2": "Bug",
      "evolution": ""
    },
    {
      "name": "fomantis",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "lurantis",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "morelull",
      "type1": "Grass",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "shiinotic",
      "type1": "Grass",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "salandit",
      "type1": "Poison",
      "type2": "Fire",
      "evolution": ""
    },
    {
      "name": "salazzle",
      "type1": "Poison",
      "type2": "Fire",
      "evolution": ""
    },
    {
      "name": "stufful",
      "type1": "Normal",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "bewear",
      "type1": "Normal",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "bounsweet",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "steenee",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "tsareena",
      "type1": "Grass",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "comfey",
      "type1": "Fairy",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "oranguru",
      "type1": "Normal",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "passimian",
      "type1": "Fighting",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "wimpod",
      "type1": "Bug",
      "type2": "Water",
      "evolution": ""
    },
    {
      "name": "golisopod",
      "type1": "Bug",
      "type2": "Water",
      "evolution": ""
    },
    {
      "name": "sandygast",
      "type1": "Ghost",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "palossand",
      "type1": "Ghost",
      "type2": "Ground",
      "evolution": ""
    },
    {
      "name": "pyukumuku",
      "type1": "Water",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "type-null",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "silvally",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "minior-meteor",
      "type1": "Rock",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "komala",
      "type1": "Normal",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "turtonator",
      "type1": "Fire",
      "type2": "Dragon",
      "evolution": ""
    },
    {
      "name": "togedemaru",
      "type1": "Electric",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "mimikyu",
      "type1": "Ghost",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "bruxish",
      "type1": "Water",
      "type2": "Psychic",
      "evolution": ""
    },
    {
      "name": "drampa",
      "type1": "Normal",
      "type2": "Dragon",
      "evolution": ""
    },
    {
      "name": "dhelmise",
      "type1": "Ghost",
      "type2": "Grass",
      "evolution": ""
    },
    {
      "name": "jangmo-o",
      "type1": "Dragon",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "hakamo-o",
      "type1": "Dragon",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "kommo-o",
      "type1": "Dragon",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "tapu-koko",
      "type1": "Electric",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "tapu-lele",
      "type1": "Psychic",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "tapu-bulu",
      "type1": "Grass",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "tapu-fini",
      "type1": "Water",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "cosmog",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "cosmoem",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "solgaleo",
      "type1": "Psychic",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "lunala",
      "type1": "Psychic",
      "type2": "Ghost",
      "evolution": ""
    },
    {
      "name": "nihilego",
      "type1": "Rock",
      "type2": "Poison",
      "evolution": ""
    },
    {
      "name": "buzzwole",
      "type1": "Bug",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "pheromosa",
      "type1": "Bug",
      "type2": "Fighting",
      "evolution": ""
    },
    {
      "name": "xurkitree",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "celesteela",
      "type1": "Steel",
      "type2": "Flying",
      "evolution": ""
    },
    {
      "name": "kartana",
      "type1": "Grass",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "guzzlord",
      "type1": "Dark",
      "type2": "Dragon",
      "evolution": ""
    },
    {
      "name": "necrozma",
      "type1": "Psychic",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "magearna",
      "type1": "Steel",
      "type2": "Fairy",
      "evolution": ""
    },
    {
      "name": "marshadow",
      "type1": "Fighting",
      "type2": "Ghost",
      "evolution": ""
    },
    {
      "name": "poipole",
      "type1": "Poison",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "naganadel",
      "type1": "Poison",
      "type2": "Dragon",
      "evolution": ""
    },
    {
      "name": "stakataka",
      "type1": "Rock",
      "type2": "Steel",
      "evolution": ""
    },
    {
      "name": "blacephalon",
      "type1": "Fire",
      "type2": "Ghost",
      "evolution": ""
    },
    {
      "name": "zeraora",
      "type1": "Electric",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "meltan",
      "type1": "Steel",
      "type2": "",
      "evolution": ""
    },
    {
      "name": "melmetal",
      "type1": "Steel",
      "type2": "",
      "evolution": ""
    }
]
const PokemonList = ({ jsonData }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(8); // Number of cards per page
    const [filteredPokemon, setFilteredPokemon] = useState([]);
  
    useEffect(() => {
      setIsLoading(true);
      // Simulating a delay to fetch data (you can remove this timeout in actual use)
      setTimeout(() => {
        setFilteredPokemon(jsonData.slice(0, pageSize)); // Initialize with the first page of data
        setIsLoading(false);
      }, 1000);
    }, [jsonData, pageSize]);
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    useEffect(() => {
      const filteredData = jsonData.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPokemon(filteredData.slice(0, pageSize)); // Update filtered data when search term changes
      setCurrentPage(1); // Reset to the first page
    }, [jsonData, searchTerm, pageSize]);
  
    const handleNextPage = () => {
      const nextPageData = jsonData.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
      setFilteredPokemon(nextPageData);
      setCurrentPage((prevPage) => prevPage + 1);
    };
  
    const handlePrevPage = () => {
      const prevPageData = jsonData.slice((currentPage - 2) * pageSize, (currentPage - 1) * pageSize);
      setFilteredPokemon(prevPageData);
      setCurrentPage((prevPage) => prevPage - 1);
    };
  
    return (
      <div className="pokemon-list">
        <Flex direction="column" alignItems="center">
          <Input
            placeholder="Search Pokemon..."
            value={searchTerm}
            onChange={handleSearch}
            w="full"
            maxW="300px"
            mb={4}
          />
          {isLoading ? (
            <Heading as="h2" size="md" textAlign="center">
              Loading Pokemon...
            </Heading>
          ) : filteredPokemon.length > 0 ? (
            <>
              <Flex flexWrap="wrap" justifyContent="center">
                {filteredPokemon.map((pokemon, index) => (
                  <Cards12 key={index} {...pokemon} />
                ))}
              </Flex>
              <Flex mt={4} justifyContent="center">
                <button onClick={handlePrevPage} disabled={currentPage === 1} style={{ marginRight: '10px' }}>
                  Previous
                </button>
                <button onClick={handleNextPage} disabled={currentPage * pageSize >= jsonData.length}>
                  Next
                </button>
              </Flex>
            </>
          ) : (
            <Text textAlign="center">No Pokemon found for your search.</Text>
          )}
        </Flex>
      </div>
    );
  };
  
  export default function Pokedex() {
    return (
      <ChakraProvider>
        <div className="App">
          <header className="App-header">
            <img className="absolute top-6 left-10" src={logo} alt="logo" />
            <p className='bg-gradient-to-r from-red to-white inline-block text-transparent bg-clip-text absolute top-[150px] left-100 absolute text-6xl font-futura'>Welcome</p>
            <PokemonList jsonData={JsonData} />
          </header>
        </div>
      </ChakraProvider>
    );
  }