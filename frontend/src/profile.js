// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { ChakraProvider, CardBody,Text, Heading, Card, Stack, HStack, Button } from '@chakra-ui/react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import logo from './images/Logo Profile page.svg'; 

// function Cards12({ name, type1, type2, evolution }) {
//   return (
//     <Card maxW='sm' bgColor={"#222224"} borderColor={"#ffffff"} borderWidth="2px" borderRadius={"10px"}>
//       <CardBody>
//         <Stack mt='6' spacing='3'>
//           <Heading fontFamily="futura" fontSize="4xl" color="white" size='md'>{name}</Heading>
//           <Text color='white' fontSize='2xl' className='font-futura'>
//             {type1} {type2 ? ` - ${type2}` : ''}
//           </Text>
//           <Text color="white" fontFamily="futura" fontWeight="1rem"> {evolution}</Text>
//         </Stack>
//       </CardBody>
//       <Button height="50px" variant='ghost' colorScheme=''><p className='px-50px text-4xl font-futura text-red'>+</p></Button>
//     </Card>
//   );
// }

// // const PokemonCarousel = () => {
// //   const [pokemonData, setPokemonData] = useState([]);

// //   useEffect(() => {
// //     setPokemonData(jsonData);
// //   }, []);

// //   const pokemonCards = pokemonData.map((pokemon, index) => (
// //     <Cards12 key={index} {...pokemon} />
// //   ));

// //   return (
// //     <div className="carousel-container flex justify-center items-center">
// //       <div className="w-full mt-4 flex overflow-x-scroll scrollbar-hide">
// //         {pokemonCards}
// //       </div>
// //     </div>
// //   );
// // };

// const PokemonCarousel = ({ jsonData }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     if (currentIndex < jsonData.length - 3) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <div className="carousel-container flex justify-center items-center">
//       <Button className='px-3' colorScheme='white'border={"0"} onClick={handlePrev}>Prev</Button>
//       <div className="w-full mt-4 flex">
//         {jsonData.slice(currentIndex, currentIndex + 3).map((pokemon, index) => (
//           <Cards12 key={index} {...pokemon} />
//         ))}
//       </div>
//       <Button className='px-3' colorScheme='white'border={"0"} onClick={handleNext}>Next</Button>
//     </div>
//   );
// };

// export default function Profile() {
//   return (
//     <ChakraProvider>
//       <div className="App">
//         <header className="App-header">
//           <Link to='/'><img className="absolute top-6 left-10" src={logo} alt="logo" /></Link>
//           <p className='bg-gradient-to-r from-red to-white inline-block text-transparent bg-clip-text absolute top-[150px] left-100 absolute text-6xl font-futura'>Welcome Name</p>
//           <p className='absolute top-[400px] font-futura'>inventory available</p>
//           <div className='absolute top-[500px] left-10'>
//             <HStack className="absolute left-96" spacing="50px">
//               <PokemonCarousel jsonData={jsonData} />
//             </HStack>
//           </div>
//         </header>
//       </div>
//     </ChakraProvider>
//   );
// }


import React, { useState, useEffect } from 'react';
import {ChakraProvider, Card, Stack, Heading, Text, CardBody,HStack,Slider, SliderTrack, SliderFilledTrack, SliderThumb, Button } from '@chakra-ui/react';
import {Cookies} from "react-cookie"
import { Link } from 'react-router-dom';
import logo from "./images/Logo Profile page.svg"

function Cards12({ name, type1, type2, evolution }) {
  return (
    <Card maxW='sm' bgColor={"#222224"} borderColor={"#ffffff"} borderWidth="2px" borderRadius={"10px"}>
      <CardBody>
        <Stack mt='6' spacing='3'>
          <Heading fontFamily="futura" fontSize="4xl" color="white" size='md'>{name}</Heading>
          <Text color='white' fontSize='2xl' className='font-futura'>
            {type1} {type2 ? ` - ${type2}` : ''}
          </Text>
          <Text color="white" fontFamily="futura" fontWeight="1rem"> {evolution}</Text>
        </Stack>
      </CardBody>
      <Button height="50px" variant='ghost' colorScheme=''><p className='px-50px text-4xl font-futura text-red'>+</p></Button>
    </Card>
  );
}

const PokemonCarousel = ({ username }) => {
  const [inventory, setInventory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // Adjust number of cards visible

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        setTimeout(async()=>{
          console.log(username)
          let Cookiesetter=new Cookies()
          const response = await fetch(`http://localhost:8080/pokedex/display/${Cookiesetter.get('username')}`);
          console.log(response)
          if (!response.ok) {
            throw new Error(`Error fetching inventory: ${response.statusText}`);
          }
          const data = await response.json();
          setInventory(data.inventory); // Assuming the response contains "inventory" data
        },1000)
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    };

    fetchInventory();
  }, [username]);

  const handleNext = () => {
    if (currentIndex < inventory.length - slidesToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const pokemonCards = inventory.slice(currentIndex, currentIndex + slidesToShow).map((pokemon, index) => (
    <Cards12 key={index} {...pokemon} />
  ));

  return (
    <div className="carousel-container flex justify-center items-center">
      <Button variant="ghost" size="sm" mr={2} onClick={handlePrev}>
        Prev
      </Button>
      <Slider defaultValue={currentIndex} min={0} max={inventory.length - slidesToShow} onChange={setCurrentIndex}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Button variant="ghost" size="sm" ml={2} onClick={handleNext}>
        Next
      </Button>
      <div className="w-full mt-4 flex overflow-x-scroll scrollbar-hide">
        {pokemonCards}
      </div>
    </div>
  );
};


export default function Profile() {
  
  const [username, setUsername] = useState('');
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    // Fetch user data and inventory from Go server
    let Cookiesetter=new Cookies()

    setUsername(Cookiesetter.get('username'))

  }, []);

  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <Link to='/'><img className="absolute top-6 left-10" src={logo} alt="logo" /></Link>
          <p className='bg-gradient-to-r from-red to-white inline-block text-transparent bg-clip-text absolute top-[150px] left-100 absolute text-6xl font-futura'>{username ? `Welcome ${username}` : 'Welcome'}</p>
          <p className='absolute top-[400px] font-futura'>Inventory available</p>
          <div className='absolute top-[500px] left-10'>
            <HStack className="absolute left-96" spacing="50px">
              <PokemonCarousel inventory={inventory} />
            </HStack>
          </div>
        </header>
      </div>
    </ChakraProvider>
  );
}
