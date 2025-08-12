import { Box, Tag, Text, Heading } from "@chakra-ui/react";
import Slider from 'react-slick';
import Card from "../components/card";
import travels from "../data/travelData";

function Travel(){
    
    return (
        <Box p = {7} m = {5}>
            <Heading fontSize = "xl" my = {2}>My Travel Diary</Heading>
            <Text mb = {5}>These travels opened my eyes to new cultures, people, and places — each experience shaping how I see the world </Text>
           
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