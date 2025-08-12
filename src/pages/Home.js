// src/pages/Home.js
import React from 'react';
import { Box, Heading, Flex, Text, Grid, GridItem, Image, Divider, Link} from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";
import profilePic from '../images/fourthJuly.jpg'
import cafePic from '../images/cafe.png'
import { FaPagelines} from 'react-icons/fa';
import { GiLotus } from 'react-icons/gi';
import { BsFlower1 } from 'react-icons/bs';



function Home() {
  return (
    <Box p = {3} height = "90vh">
      <Grid
        templateColumns={{ base: 'repeat(5, 1fr)', md: 'repeat(6, 1fr)' }}
        templateRows={{ base: 'auto', md: 'repeat(6, 1fr)' }}
        gap = {4}
        height="100%"  // stretches to fill the full screen
        alignItems="stretch" // 👈 ensures children stretch vertically


      >
        <GridItem 
          colSpan={{ base: 3, md: 3 }}
          rowSpan={{ base: 2, md: 3 }}
          bg="#FADCD9" 
          p={6} 
          borderRadius="xl"
          height="100%"
          position="relative" // key for absolute positioning
          cursor="default" // optional, makes it feel interactive without being clickable
          transition="transform 0.3s ease, box-shadow 0.3s ease"
          _hover={{
            transform: 'scale(1.03)',
            boxShadow: 'lg',
          }}
        >
          {/* Flower icon in top-right */}
          <Flex direction="column" justify="space-between" height="100%">
            <Box position="absolute" top={4} right={4} p = {{md: "6"}} fontSize= {{base: "5xl", md: "8xl"}}>
              <BsFlower1 color="#F8AFA6" />
            </Box>

          {/* Text content in bottom-left */}
            <Box mt="auto">
              <Heading size="lg" noOfLines={2} whiteSpace="normal">
                Engineer by Day, Artist Always —
              </Heading>
              <Text fontSize="xl" mt={2}>
                Blending Logic and Imagination to Build What Matters
              </Text>
            </Box>
          </Flex>
        </GridItem>


       <GridItem
          colSpan={{ base: 2, md: 1 }}
          rowSpan={{ base: 2, md: 3 }}
          borderRadius="xl"
          overflow="hidden"
          display="flex"
          justifyContent="center"
        >
          <Image
            src={profilePic}
            alt="portrait"
            objectFit="cover" // change to "contain" if you don’t want any cropping
            width="100%"
            height="100%"
            borderRadius="xl"
          />
        </GridItem>


        <GridItem 
          colSpan={{ base: 5, md: 2 }}
          rowSpan={{ base: 3, md: 5 }}
          bg = "#FADCD9" 
          borderRadius= "xl" 
          p = {2}
        >
          <Text fontWeight = "bold">Learn More</Text>
          <Image
            src = {cafePic}
            alt = "portrait"
            objectFit= "cover"
            width = "100%"
            height="50%"
            mt = {2}
            borderRadius= "lg"
          ></Image>
  
          <Box mt = {4}>
              <Divider borderColor = "#F8AFA6" orientation='horizontal' my={4}></Divider>
                <Link as={RouterLink} to="/projects">
                  <Text>Projects</Text>
                </Link>
              <Divider borderColor = "#F8AFA6" orientation='horizontal' my={4}></Divider>
                <Link as={RouterLink} to="/travel">
                    <Text>Travel Diary</Text>
                </Link>
              <Divider borderColor = "#F8AFA6" orientation='horizontal' my={4}></Divider>
                <Link as={RouterLink} to="/art">
                  <Text>Art Portfolio</Text>
                </Link>
          </Box>


        </GridItem >

        <GridItem colSpan={{ base: 5, md: 2 }} rowSpan={{ base: 1, md: 3 }}  bg = "#FADCD9" p= {4} borderRadius = "xl">
          <Text fontSize = "xl">I'm a developer who values both logic and creativity — I build secure, user-friendly apps and draw inspiration from my love of art and travel.</Text>
        </GridItem>

        <GridItem 
          colSpan={{ base: 5, md: 2 }}
          rowSpan={{ base: 1, md: 3 }} 
          bg="#F8AFA6"
          display="flex"
          p={6}
          position="relative"
          borderRadius="xl"
          flexDirection="column"
          justifyContent={{ base: 'flex-start', md: 'flex-end' }}
        >
          {/* This will no longer be absolutely positioned */}
          <Text fontSize="md" mb={2}>
            Have some questions?
          </Text>

          {/* Keep this arrow absolutely positioned if you want it in the corner */}
          <Box position="absolute" top={3} right={4} fontSize="3xl">
            ↗
          </Box>

          {/* Main heading */}
          <Heading size="lg" textAlign="left">
            Contact Me
          </Heading>
        </GridItem>


        <GridItem 
            
            colSpan={{ base: 5, md: 2 }}
            rowSpan={1}
            bg = "#FADCD9" 
            px={6}  // horizontal padding only
            py={4}  // optionally add vertical padding if you want space top/bottom
            textAlign="center"
            display = "flex"
            borderRadius = "xl"
            justifyContent = "space-between"
            alignItems="center"
          >
            <Link href = "https://github.com/sim21kaur"><Text>GITHUB</Text></Link>
            <Text>EMAIL</Text>
            <Link href = "https://www.linkedin.com/in/simkaurs/"><Text>LINKEDIN</Text></Link>
                    
        </GridItem>


      </Grid>
    </Box>
  );
}

export default Home;
