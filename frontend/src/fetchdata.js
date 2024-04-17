// // const fs = require('fs');

// const csvString = `name, type1, type2, evolution
// bulbasaur,Grass,Poison,ivysaur
// ivysaur,Grass,Poison,venusaur
// venusaur,Grass,Poison,
// charmander,Fire,,charmeleon
// charmeleon,Fire,,charizard
// charizard,Fire,Flying,
// squirtle,Water,,wartortle
// wartortle,Water,,blastoise
// blastoise,Water,,
// caterpie,Bug,,metapod
// metapod,Bug,,butterfree
// butterfree,Bug,Flying,
// weedle,Bug,Poison,kakuna
// kakuna,Bug,Poison,beedrill
// beedrill,Bug,Poison,
// pidgey,Normal,Flying,pidgeotto
// pidgeotto,Normal,Flying,pidgeot
// pidgeot,Normal,Flying,
// rattata,Normal,,raticate
// raticate,Normal,,
// spearow,Normal,Flying,fearow
// fearow,Normal,Flying,
// ekans,Poison,,arbok`;

// function FetchPokemonData(csvString, options = {}) {
//   const defaultOptions = {
//     header: true, 
//     delimiter: ',', // Comma delimiter (can be customized)
//   };

//   // Merge user options with defaults
//   const mergedOptions = { ...defaultOptions, ...options };

//   // Split CSV string into lines
//   const lines = csvString.split(/[\r\n]+/);

//   // Extract headers if provided
//   const headers = mergedOptions.header ? lines.shift().split(mergedOptions.delimiter) : [];

//   // Parse data lines
//   const data = lines.map(line => {
//     const values = line.split(mergedOptions.delimiter);
//     const obj = {};

//     // Map values to object properties using headers (if available)
//     headers.forEach((header, index) => {
//       obj[header] = values[index] || ''; // Handle empty type2 values
//     });

//     return obj;
//   });

//   return data;
// }

// const jsonData = FetchPokemonData(csvString);

// const jsonFilePath = 'parsed_data.json'; // Replace with desired filename

// const jsonDataString = JSON.stringify(jsonData, null, 2); // Convert to indented JSON string

// fs.writeFile(jsonFilePath, jsonDataString, (err) => {
//   if (err) {
//     console.error('Error writing JSON data to file:', err);
//   } else {
//     console.log('Successfully created JSON file:', jsonFilePath);
//   }
// });
