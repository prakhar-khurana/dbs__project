// import "./App.css"
// import './index.css'
// import * as React from 'react'
// import {Link} from 'react-router-dom';
// import { ChakraProvider } from '@chakra-ui/react'
// import {
//     FormControl,
//     Input} from '@chakra-ui/react'

// import axios from 'axios'
// import logo from "./images/Logo Profile page.svg"
// import { Butt } from "./App";

// function handleClick(){
//     let email=document.getElementById("email").innerText
//     let pass=document.getElementById("password").innerText
//     // let name=document.getElementById("name")
//     // let age=document.getElementById("age")
//     let data={
//         email:email,
//         password:pass
//     }

//     // axios.post('https://localhost:8080/register', data)
// //   .then(response => {
// //     console.log('Response:', response.data); // Handle successful response
// //   })
// //   .catch(error => {
// //     console.error('Error:', error); // Handle errors
// //   });
//   console.log(email,pass)
// }
// export default function Register(){
//     return(
//         <ChakraProvider>
//         <div className="App">
//         <header className="App-header">
//         <Link to='/'><img className="absolute top-6 left-10" src={logo} alt="logo"/></Link>
//         <p className="absolute top-40 space-left2 text-6xl font-futura text-bold bg-gradient-to-r from-red to-white inline-block text-transparent bg-clip-text"> Who</p>
//         <FormControl>
//         <div className="flex-col relative px-[620px] space-y-6">
//         <Input id="email" type='email' width="400px" placeholder="Email" border="0" borderBottom="1px solid white" _hover={{border:"solid white"}} _placeholder={{ color: 'white', fontFamily: 'futura', fontSize:"20px"}} />
//         <Input id="password" type='password' width="400px" placeholder="Password" border="0" borderBottom="1px solid white" _hover={{border:"solid white"}} _placeholder={{ color: 'white', fontFamily: 'futura', fontSize:"20px"}} />
//         {/* <Input id="name" width="400px" type="name" border="0" placeholder="Name" borderBottom="1px solid white" _hover={{border:"solid white"}} _placeholder={{ color: 'white', fontFamily: 'futura', fontSize:"20px" }}/>
//         <Input id="age" width="400px" type="number" border="0" placeholder="Age" borderBottom="1px solid white" _hover={{border:"solid white"}} _placeholder={{ color: 'white', fontFamily: 'futura', fontSize:"20px" }}/> */}
//         </div>
//         <div className="absolute px-[890px] py-20">
//         <Butt onClick={handleClick} type='submit' width='150px' height='60px' borderRadius='10px' fontSize='24px'>Register</Butt>
//         </div>
//         </FormControl>
//         </header>
//         </div>
//         </ChakraProvider>
//     )
// }





//make the button chaneg color on hover

import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests
import { Link } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { FormControl, Input, Button } from '@chakra-ui/react'; 

import logo from './images/Logo Profile page.svg'; 

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      const response = await axios.post('https://127.0.0.1:8080/register', {
        email,
        password,
      });
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration error:', error);
    }
    console.log(email,password)
  };

  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img className="absolute top-6 left-10" src={logo} alt="logo" />
          </Link>
          <p className="absolute top-40 space-left2 text-6xl font-futura text-bold bg-gradient-to-r from-red to-white inline-block text-transparent bg-clip-text">
            Who
          </p>
          <FormControl as="form" onSubmit={handleSubmit}>
            <div className="flex-col relative px-[550px] space-y-6">
              <Input
                id="email"
                type="email"
                width="400px"
                placeholder="Email"
                border="0"
                borderBottom="1px solid white"
                _hover={{ border: 'solid white' }}
                _placeholder={{ color: 'white', fontFamily: 'futura', fontSize: '20px' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update state on change
              />
              <Input
                id="password"
                type="password"
                width="400px"
                placeholder="Password"
                border="0"
                borderBottom="1px solid white"
                _hover={{ border: 'solid white' }}
                _placeholder={{ color: 'white', fontFamily: 'futura', fontSize: '20px' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update state on change
              />
            </div>
            <div className="absolute px-[890px] py-20">
              <Button onClick={handleSubmit} type="submit" width="150px" height="60px" borderRadius="10px" fontSize="24px"> 
                Register
              </Button>
            </div>
          </FormControl>
        </header>
      </div>
    </ChakraProvider>
  );
}

