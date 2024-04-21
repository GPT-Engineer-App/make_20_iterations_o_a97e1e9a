import { Box, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";

const Gallery = () => {
  return (
    <Box>
      <Heading>Our Gallery</Heading>
      <Text>Explore our portfolio of stunning rendering projects:</Text>
      <Heading as="h2" size="xl" mt={8}>
        Exterior Rendering
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={4}>
        {}
        <Image src="https://i.ebayimg.com/images/g/yc4AAOSwDMxkDPGY/s-l800.webp" alt="Exterior Rendering 1" borderRadius="md" />
        <Image src="https://i.ebayimg.com/images/g/L6AAAOSwkvxkDPGZ/s-l800.webp" alt="Exterior Rendering 2" borderRadius="md" />
        <Image src="https://i.ebayimg.com/images/g/oVQAAOSwxzxkDPGX/s-l800.webp" alt="Exterior Rendering 3" borderRadius="md" />
      </SimpleGrid>
      <Heading as="h2" size="xl" mt={8}>
        Interior Rendering  
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={4}>
        <Image src="https://example.com/interior1.jpg" alt="Interior Rendering 1" borderRadius="md" />
        <Image src="https://example.com/interior2.jpg" alt="Interior Rendering 2" borderRadius="md" />
        <Image src="https://example.com/interior3.jpg" alt="Interior Rendering 3" borderRadius="md" />
      </SimpleGrid>
    </Box>
  );
};

export default Gallery;
