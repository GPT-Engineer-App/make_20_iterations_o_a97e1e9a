import React, { useState } from "react";
import { Box, Heading, Text, VStack, Image, Button, Input, Textarea, useToast } from "@chakra-ui/react";
import { FaQuoteLeft, FaPhone, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here (e.g., send data to backend)
    // For demonstration purposes, we'll just show a success toast
    toast({
      title: "Quote Requested",
      description: "Your quote request has been submitted successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center" color="blue.500">
          Brisbane Rendering - Quality You Can Trust
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Rendering Services for All Types of Projects
        </Text>
        <Image src="https://i.ebayimg.com/images/g/oVQAAOSwxzxkDPGX/s-l800.webp" alt="Rendered House" borderRadius="md" />
        <Box bg="gray.100" p={6} borderRadius="md">
          <Heading as="h2" size="xl" mb={4}>
            <FaQuoteLeft /> Get a Quote
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="stretch">
              <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <Input placeholder="Your Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <Textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
              <Button type="submit" colorScheme="blue" size="lg">
                Request Quote
              </Button>
            </VStack>
          </form>
        </Box>
        <Box textAlign="center">
          <Heading as="h3" size="lg" mb={4}>
            Contact Us
          </Heading>
          <Text>
            <FaPhone /> Phone: 0450 044 372
          </Text>
          <Text>
            <FaEnvelope /> Email: brisbanerendering@gmail.com
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
