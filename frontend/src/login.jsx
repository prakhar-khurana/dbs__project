
//make the button chaneg color on hover


import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests
import { Link } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { FormControl, Input, Button } from '@chakra-ui/react'; 
import {Cookies} from 'react-cookie'
import logo from './images/Logo Profile page.svg'; 



export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      let Cookiesetter=new Cookies()
      Cookiesetter.set('username',email,{path:'/profile'})
      console.log(email)
      console.log(Cookiesetter.get('username'))
      const response = await axios.post('https://localhost:8080/login', {
        email,
        password,
      });
      console.log('Login successful:', response.data);

    } catch (error) {
      console.error('Login error:', error);
    }

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
                onChange={(e) => setEmail(e.target.value)} 
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
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <div className="absolute px-[890px] py-20">
            <Button onClick={handleSubmit} type="submit" width="150px" height="60px" borderRadius="10px" fontSize="24px"><Link to="/profile" state={{username:email}}>
                Login
                </Link>  
              </Button>
              
              
            </div>
          </FormControl>
        </header>
      </div>
    </ChakraProvider>
  );
}


