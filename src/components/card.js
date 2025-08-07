import { Box, Tag, Text, Image, Wrap, WrapItem} from "@chakra-ui/react";
import Slider from 'react-slick';

function Card({name, images, description, technologies}){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    return (
        <div>
            <Box boxShadow="md" borderRadius = "lg" mb = {8} p = {3} bg = "#EFEAE7">
                <Text fontSize = "lg" fontWeight = "bold">{name}</Text>
                {images.length > 1 ? (
                    <Box my = {3}>
                        <Slider {...settings}>

                            {images.map((src,idx) => (
                                <Image
                                    key = {idx}
                                    src = {src}
                                    height = "500px"
                                    objectFit = "contain"
                                    borderRadius = "md"
                                    width = "100%"
                                />
                            ))}
                        </Slider>
                        </Box>
                ):(
                    <Image
                        src = {images[0]}
                        height = "500px"
                        objectFit = "contain"
                        width = "100%"
                        borderRadius = "md"
                    ></Image>
                )}

                <Text fontSize = "md" my = {10}> {description}</Text>

                <Wrap>
                    {technologies.map((tech, idx) => (
                        <WrapItem key = {idx}>
                            <Tag size = "md" variant = "subtle" colorScheme = "pink"> {tech} </Tag>
                        </WrapItem>

                    ))}

                </Wrap>
            </Box>

        </div>
    )
    
}

export default Card