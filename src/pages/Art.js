import { Box, Image, SimpleGrid, Text, Heading } from "@chakra-ui/react";
import art from "../data/artData";



function Art(){
    
    return (
        <Box p={7} m={5}>
            <Heading fontSize="xl" my={2}>
                Nature & Wildlife – A Visual Study by Sim Kaur
            </Heading>
            <Text mb={6}>
                Every piece in this collection is inspired by the natural world — the quiet details of animals, plants, and wild landscapes. Creating this shaped how I see the world and helped me become who I am today.
            </Text>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
                {art.map((src, index) => (
                <Image
                    key={index}
                    src={src}
                    alt={`Artwork ${index + 1}`}
                    borderRadius="md"
                    objectFit="cover"
                    height = "350px"
                    width="100%"
                />
                ))}
            </SimpleGrid>
        </Box>
        
    )
}
    

export default Art