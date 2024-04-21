import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box>
      <Heading>About Us</Heading>
      <Text>Brisbane Rendering is a leading rendering company based in Brisbane, Australia. With over 15 years of experience, we specialize in providing high-quality rendering services for residential and commercial projects. Our team of skilled professionals is dedicated to delivering exceptional results that exceed our clients' expectations.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Our Services
      </Heading>
      <Text>We offer a wide range of rendering services, including:</Text>
      <ul>
        <li>Exterior Rendering</li>
        <li>Interior Rendering</li>
        <li>Texture Coating</li>
        <li>Feature Walls</li>
        <li>Remedial Repairs</li>
      </ul>
      <Heading as="h2" size="xl" mt={8}>
        Our Mission
      </Heading>
      <Text>At Brisbane Rendering, our mission is to provide top-quality rendering services that enhance the beauty and value of properties across Brisbane. We strive to exceed our clients' expectations by delivering exceptional workmanship, using the finest materials, and maintaining open communication throughout every project.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Why Choose Us?
      </Heading>
      <ul>
        <li>Over 15 years of industry experience</li>
        <li>Skilled and professional team</li>
        <li>High-quality materials and techniques</li>
        <li>Attention to detail and customer satisfaction</li>
        <li>Competitive pricing and excellent value</li>
      </ul>
    </Box>
  );
};

export default About;
