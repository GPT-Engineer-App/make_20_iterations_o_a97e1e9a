import { Box, Heading, Text, Avatar, VStack } from "@chakra-ui/react";

const Testimonials = () => {
  return (
    <Box>
      <Heading>What Our Clients Say</Heading>
      <VStack spacing={8} mt={8} align="stretch">
        <Box bg="gray.100" p={6} borderRadius="md">
          <Text fontSize="xl" mb={4}>
            "Brisbane Rendering did an amazing job on our home's exterior. The team was professional, efficient, and the result exceeded our expectations. We highly recommend their services!"
          </Text>
          <Avatar name="John Doe" src="" />
          <Text fontWeight="bold">John Doe</Text>
        </Box>
        {}
      </VStack>
    </Box>
  );
};

export default Testimonials;
