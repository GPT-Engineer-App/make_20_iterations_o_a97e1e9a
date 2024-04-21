import { Box, Flex, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex maxW="container.lg" mx="auto" align="center">
        <Link as={RouterLink} to="/" fontWeight="bold">
          Brisbane Rendering
        </Link>
        <Spacer />
        <Link as={RouterLink} to="/about" ml={4}>
          About
        </Link>
        <Link as={RouterLink} to="/services" ml={4}>
          Services
        </Link>
        <Link as={RouterLink} to="/gallery" ml={4}>
          Gallery
        </Link>
        <Link as={RouterLink} to="/testimonials" ml={4}>
          Testimonials
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;
