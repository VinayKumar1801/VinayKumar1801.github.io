import React,{useEffect} from 'react'
import {
  Box,
  Text,
  Button,
  Flex,
  Image,
  Divider,
  Heading,
  Grid,
  GridItem,
  Link
} from "@chakra-ui/react";
import { CheckCircleIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import Aos from "aos";
import "aos/dist/aos.css";
import "./project.css"
import DNA from "../../assets/DNA.png"

const Project3 = () => {

    const projects = [
      {
        heading: "DNA NEWS WEBSITE CLONE",
        description:
          "Dna Latest breaking news, pictures, photos and Video News.",
        techs: [
          ["bx bxl-html5", "#f1a118"],
          ["bx bxl-css3", "#4e95e7"],
        ],
        link: "https://stellular-meerkat-5bd6df.netlify.app/home.html",
        github: "https://github.com/VinayKumar1801/expert-iron-7655",
      },
    ];


     useEffect(() => {
       Aos.init({ duration: 1000 });
     }, []);

  return (
    <section className="projects section project1" id="projects" >
      {projects.map((elem) => (
        <Grid
        gridTemplateColumns={{lg:".6fr 1fr",md:"1fr",base:"1fr" }}
          key={elem.heading}
        //   w={"75%"}
          margin={"auto"}
          gap={5}
        //   justify={"space-between"}
          padding="0 3rem"
        //   flexDirection={{lg:"row",md:"column",base:"column"}}

          textAlign={{md:"center",base:"center"}}
        >
          <div style={{ width: "80%", margin: "auto" }} data-aos="fade-right">
            <Box m={"auto"}>
              <Heading size={"lg"}>{elem.heading}</Heading>
              <Divider mt={"2"} />
              <Text mt={"3"}>{elem.description}</Text>
            </Box>
            <Grid
            //   px={5}
              pt={5}
              templateRows="repeat(3, 50px)"
            //   templateColumns="repeat(4,1fr)"
              justifyContent={{md:"center",base:"center"}}
            gap="5px"
            >
              <GridItem rowSpan={1} colSpan={2}>
                <Text fontWeight={"700"}>Tech stack</Text>
              </GridItem>
              <GridItem colSpan={2} rowSpan={1}>
                <Flex alignItems={"center"} gap={4}>
                  {elem.techs.map((tech) => (
                    <i key ={tech[0]}
                      className={tech[0]}
                      style={{ color: tech[1], fontSize: "50px" }}
                    ></i>
                  ))}
                </Flex>
              </GridItem>

              <GridItem colSpan={2} rowSpan={1} mt={4}>
                <Flex gap={4}>
                  <a
                    href={elem.link}
                    className="button button--flex"
                    target="_blank"
                  >
                    Live
                    <span className="button__icon">
                      <i
                        className="bx bx-link-external"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </span>
                  </a>
                  <a
                    href={elem.github}
                    className="button button--flex"
                    target="_blank"
                  >
                    Github
                    <span className="button__icon">
                      <i
                        className="bx bxl-github"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </span>
                  </a>
                </Flex>
              </GridItem>
            </Grid>
          </div>
          <div style={{ width: "100%", margin: "auto" }} data-aos="fade-left">
            <Box mx={"auto"} w={"full"}>
              <img
              width={"100%"}
                src={DNA}
                alt="DNA img"
              />
            </Box>
          </div>
        </Grid>
      ))}
    </section>
  );
}

export default Project3