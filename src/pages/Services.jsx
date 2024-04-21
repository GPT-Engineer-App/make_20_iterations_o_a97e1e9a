import { Box, Heading, Text } from "@chakra-ui/react";

const Services = () => {
  return (
    <Box>
      <Heading>Our Services</Heading>
      <Text>Brisbane Rendering offers a comprehensive range of rendering services, including:</Text>
      <Heading as="h2" size="xl" mt={8}>
        Exterior Rendering
      </Heading>
      <Text>Transform the exterior of your property with our professional rendering services. We use high-quality materials and techniques to create a durable, attractive finish that enhances your home's curb appeal and protects it from the elements.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Interior Rendering
      </Heading>
      <Text>Elevate your interior spaces with our expert interior rendering services. From feature walls to complete room makeovers, we can help you achieve the perfect look and feel for your home or business.</Text>
      {}
    </Box>
  );
};

export default Services;
