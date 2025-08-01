// src/components/Navbar.js
import React from 'react';
import { Flex, Box, Link, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';

function Navbar() {
  return (
    <Flex as="nav" bg="#EFEAE7" p="4" justify="space-between" boxShadow="md"  alignItems="center">
      <Box fontWeight="bold">SIM KAUR</Box>
      <Flex gap="4" alignItems="center">
        <Link as={RouterLink} to="/">Home</Link>
        <Link as={RouterLink} to="/projects">Projects</Link>
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
            <MenuItem as={RouterLink} to="/about">About Me</MenuItem>
            <MenuItem as={RouterLink} to="/travel">Travel Diaries</MenuItem>
            <MenuItem as={RouterLink} to="/art">Art Portfolio</MenuItem>
            <MenuItem as={RouterLink} to="/contact">Contact</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}

export default Navbar;
