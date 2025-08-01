import { Box, Tag } from "@chakra-ui/react";
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
            <Box>
                <Text fontSize = "lg">{name}</Text>
                {images.length > 1 ? (
                    <Slider {...settings}>

                        {images.map((src,idx) => (
                            <Image
                                key = {idx}
                                src = {src}
                                height = "200px"
                                objectFit = "cover"
                                borderRadius = "md"
                                width = "100%"
                            />
                        ))}
                    </Slider>
                ):(
                    <Image
                        src = {images[0]}
                        height = "200px"
                        objectFit = "cover"
                        width = "100%"
                        borderRadius = "md"
                    ></Image>
                )}

                <Text fontSize = "md" my = {3}> {description}</Text>

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