import { Stack, Button } from '@chakra-ui/react';
import './App.css';
import './index.css'
import * as React from 'react'
import {Link} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import logo from "./images/Logo Profile page.svg"

export const Butt = ({ children, ...props }) => {

  const defaultProps = {
    size: 'lg',
    colorScheme: 'white',
    variant: 'outline',
    height: '111px',
    width: '300px',
    fontSize: '50px',
    borderRadius: '21px',
    fontFamily: 'futura',
    border:"2px",
    _hover: { 
      bg: '#ffffff', 
      color: '#222224', 
      borderColor: '#222224',
    },
  };

  const mergedProps = { ...defaultProps, ...props };

  return (
    <Button {...mergedProps}>
      {children}
    </Button>
  );
};


export default function App() {
  return (
<ChakraProvider> 
<div className="App">
  <header className="App-header">
   <Link to='/'><img className="absolute top-6 left-10" src={logo} alt="logo"/></Link>
   <Stack direction="column" spacing={6} align={'center'}>
   <Link to="/register"><Butt>Register</Butt></Link>
    <Link to="/login"><Butt>Login</Butt></Link>
    <Link to="/find"><Butt>Find</Butt></Link> 
  </Stack>
  </header>
</div>
</ChakraProvider>
  );
}

