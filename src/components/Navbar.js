// src/components/Navbar.js
import React from 'react';
import { Flex, Box, Link, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useLocation } from 'react-router-dom';


function Navbar() {
  const location = useLocation();

  return (
    <Flex as="nav" bg="#EFEAE7" p="4" justify="space-between" boxShadow="md"  alignItems="center">
      <Box fontWeight="bold">SIM KAUR</Box>
      <Flex gap="4" alignItems="center">
        <Link 
          as={RouterLink} 
          to="/"
          px = {3}
          py = {2}
          borderRadius = "md"
          bg={location.pathname === "/" ? "#FADCD9" : "transparent"}
          _hover = {{bg: "#FADCD9", textDecoration: "none"}}
        >Home</Link>

        <Link 
          as={RouterLink} 
          to="/projects"
          px = {3}
          py = {2}
          borderRadius = "md"
          bg={location.pathname === "/projects" ? "#FADCD9" : "transparent"}
          _hover = {{bg: "#FADCD9", textDecoration: "none"}}
        >Projects</Link>
        <Menu>
          <MenuButton 
            as = {Button} 
            rightIcon = {<ChevronDownIcon />} 
            variant = "ghost" 
            height="auto"          // override default height
            minHeight="unset"      // unset minHeight to avoid button default height
            lineHeight="1.5"
            fontSize = "md"
            fontWeight = "normal"
            fontFamily = "body"
          // _hover={{bg: "transparent", textDecoration: 'underline' }}
            py="1"
            
          > More </MenuButton>
          <MenuList>
            <MenuItem as={RouterLink} to="/travel">Travel Diaries</MenuItem>
            <MenuItem as={RouterLink} to="/art">Art Portfolio</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}

export default Navbar;
