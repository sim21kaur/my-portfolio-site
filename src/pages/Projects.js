import { Box, Tag, Text, Heading } from "@chakra-ui/react";
import Slider from 'react-slick';
import Card from "../components/card";
import projects from "../data/projectData";

function Project(){
    
    return (
        <Box p = {7} m = {5}>
            <Heading fontSize = "xl" my = {2}>My Coding Projects</Heading>
            <Text mb = {5}>Welcome to my coding projects portfolio. Get a look into the projects I’ve brought to life. Each crafted with intention — balancing function, creativity, and real-world utility. Browse through my work and explore what's made it past the local environment.</Text>
           
            {projects.map((project,idx) => (
            <Card
                key = {project.id}
                name = {project.name}
                images = {project.images}
                description = {project.description}
                technologies = {project.technologies}
            ></Card>
         ))}
        </Box>
        
    )
}
    

export default Project