// src/pages/Home.js
import React from 'react';
import { Box, Heading, Text, Grid, GridItem, Image, Divider, Link} from '@chakra-ui/react';
import profilePic from '../images/fourthJuly.jpg'
function Home() {
  return (
    <Box p = {3} height = "90vh">
      <Grid
        templateColumns={{ base: 'repeat(5, 1fr)', md: 'repeat(6, 1fr)' }}
        templateRows={{ base: 'repeat(10, auto)', md: 'repeat(6, 1fr)' }}
        gap = {4}
        height="100%"  // stretches to fill the full screen
        alignItems="stretch" // 👈 ensures children stretch vertically


      >
        <GridItem 
          colSpan={{ base: 3, md: 3 }}
          rowSpan={{ base: 2, md: 3 }}
          bg = "#FADCD9" 
          p={6} 
          borderRadius="xl"
          height = "100%"
          justifyContent="center"
          flexDirection="column"
        >
            <Heading size = "lg" noOfLines={2} whiteSpace="normal" >Engineer by Day, Artist Always —</Heading>
            <Text fontSize = "xl" mt= {2}>  Blending Logic and Imagination to Build What Matters</Text>
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
            src = {profilePic}
            alt = "portrait"
            height="50%"
            mt = {2}
            borderRadius= "lg"
          ></Image>
  
          <Box mt = {4}>
              <Divider borderColor = "#F8AFA6" orientation='horizontal' my={4}></Divider>
              <Text>Projects</Text>
              <Divider borderColor = "#F8AFA6" orientation='horizontal' my={4}></Divider>
              <Text>Travel Diary</Text>
              <Divider borderColor = "#F8AFA6" orientation='horizontal' my={4}></Divider>
              <Text>Art Portfolio</Text>
          </Box>


        </GridItem >

        <GridItem colSpan={{ base: 5, md: 2 }} rowSpan={{ base: 1, md: 3 }}  bg = "#FADCD9" p= {4} borderRadius = "xl">
          <Text>Sim is ...</Text>
        </GridItem>

        <GridItem 
          colSpan={{ base: 5, md: 2 }}
          rowSpan={{ base: 1, md: 3 }} 
          bg = "#F8AFA6"
          display = "flex"
          p = {6}
          borderRadius = "xl"
          flexDirection = "column"
          justifyContent = "space-between"
        >
          <Text fontSize = "sm" mb = {2}>Have some questions?</Text>
          <Heading size = "md">Contact Me</Heading>
          <Link mt = "auto" alignSelf = "flex-end" href = "/contact">---</Link>

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
            <Text>INSTAGRAM</Text>
            <Text>TWITTER</Text>
            <Text>LINKEDIN</Text>
                    
        </GridItem>


      </Grid>
    </Box>
  );
}

export default Home;
