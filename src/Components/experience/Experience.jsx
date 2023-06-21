import React from 'react'
import { Box, Center, List, ListItem, Text } from "@chakra-ui/react";

const Experience = () => {
  return (
    <section className="about section" id="experience">
      <h2 className="section__title">Experience</h2>
      <Center height="100vh">
        <Box
          p={8}
          maxWidth="600px"
          borderWidth={1}
          borderRadius="md"
          boxShadow="lg"
        >
          <List spacing={2}>
            <ListItem>
              <Text fontWeight="bold" color={"#E94560"}>
                Organization:
              </Text>
              <Text mb={4}>Flamecloud, Gurugram (Internship)</Text>
            </ListItem>

            <ListItem>
              <Text fontWeight="bold" color={"#E94560"}>
                Role:
              </Text>
              <Text mb={4}>Software Engineer Intern</Text>
            </ListItem>

            <ListItem>
              <Text fontWeight="bold" color={"#E94560"}>
                Duration:
              </Text>
              <Text mb={4}>March 2023 - June 2023</Text>
            </ListItem>

            <ListItem textAlign={"justify"}>
              <Text fontWeight="bold" color={"#E94560"}>
                Responsibilities:
              </Text>
              <List ml={4} styleType="disc">
                <ListItem>
                  <Text>
                    Design, develop, and maintain code for both front-end and
                    back-end development using JavaScript, HTML, CSS, React, and
                    Express/Node.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>
                    Emphasize writing code that is readable, extensible, and
                    testable while considering performance requirements.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>
                    Troubleshoot and resolve software issues in applications.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>Follow corporate coding standards and guidelines.</Text>
                </ListItem>
                <ListItem>
                  <Text>
                    Collaborate with other developers to enhance the
                    functionality of the product.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>
                    Create and update documentation for new and existing
                    features in the applications.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>Provide technical support when needed.</Text>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Box>
      </Center>
    </section>
  );
}

export default Experience