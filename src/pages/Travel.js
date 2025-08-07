import { Box, Tag, Text, Heading } from "@chakra-ui/react";
import Slider from 'react-slick';
import Card from "../components/card";
import travels from "../data/travelData";

function Travel(){
    
    return (
        <Box p = {7} m = {5}>
            <Heading fontSize = "xl" my = {2}>My Travel Diary</Heading>
            <Text mb = {5}>Welcome to my coding projects portfolio. Get a look into the projects I’ve brought to life. Each crafted with intention — balancing function, creativity, and real-world utility. Browse through my work and explore what's made it past the local environment.</Text>
           
            {travels.map((dest) => (
            <Card
                key = {dest.id}
                name = {dest.name}
                images = {dest.images}
                description = {dest.description}
                technologies = {[]}
            ></Card>
         ))}
        </Box>
        
    )
}
    

export default Travel