import { Box, Link, Image, Flex } from "@chakra-ui/react";
import React from 'react'

const Stats = () => {
  return (
    <Box textAlign={"center"} w={"75%"} m={"auto"}>
      <h2 className="section__title">My Statistics</h2>
      <Box m={"auto"} w={"full"} mt="2rem">
        <Link href="https://github.com/vinaykumar1801" isExternal>
          <Image
            m={"auto"}
            w={{ lg: "60%", md: "70%", sm: "90%" }}
            src="https://github-readme-streak-stats.herokuapp.com?user=vinaykumar1801&theme=nord"
            alt="Github Statistics"
          />
        </Link>
      </Box>

      <Flex
        w={"full"}
        m="auto"
        mt={"7"}
        justify={"space-around"}
        gap="2rem"
        flexDirection={{ lg: "row", base: "column", sm: "column", md: "row" }}
      >
        <Link href="https://github.com/VinayKumar1801" isExternal>
          <Image
            // align="center"
            margin={"auto"}
            display={{ lg: "inline", md: "block", sm: "block", base: "block" }}
            src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=vinaykumar1801&theme=nord_dark" //launguages
          />
        </Link>
        <Link href="https://github.com/VinayKumar1801" isExternal>
          <Image
            // align="left"
            margin={"auto"}
            display={{ lg: "inline", md: "block", sm: "block", base: "block" }}
            src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=vinaykumar1801&theme=nord_dark" //stats
          />
        </Link>
      </Flex>
    </Box>
  );
}

export default Stats


