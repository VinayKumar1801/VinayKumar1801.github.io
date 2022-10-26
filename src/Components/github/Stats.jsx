import { Box, Link, Image, Flex } from "@chakra-ui/react";
import React from 'react'

const Stats = () => {
  return (
    <Box  textAlign={"center"} w={"75%"} m={"auto"} >
      <h2 className="section__title">My Statistics</h2>
      <Box m="auto" mt={"7"}>
        <Link href="https://github.com/VinayKumar1801" isExternal>
          <Image
            m={"auto"}
            w={{ lg: "60%", md: "70%", sm: "90%" }}
            src="https://github-readme-streak-stats.herokuapp.com?user=VinayKumar1801"
            alt="Github Statistics"
          />
        </Link>
      </Box>
      <Flex w={"full"} m="auto" mt={"7"} justify={"space-around"} gap="2rem" flexDirection={{lg:"row",base:"column",sm:"column",md:"row"}}>
        <Link href="https://github.com/VinayKumar1801" isExternal>
          <Image
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=VinayKumar1801" //launguages
          />
        </Link>
        <Link href="https://github.com/VinayKumar1801" isExternal>
          <Image
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=VinayKumar1801&count_private=true&show_icons=true" //stats
          />
        </Link>
      </Flex>
    </Box>
  );
}

export default Stats


