// import React from 'react'
// import Project1 from './Project1'
// import Project2 from './Project2'
// import Project3 from './Project3'
// const Projects = () => {
//   return (
//     <section className="projects section" id="projects">
//     <h2 className="section__title">Projects</h2>
//     <span className="section__subtitle">The things I make</span>
//     <Project1/>
//     <Project2/>
//     <Project3/>
//     </section>
    
    
//   )
// }

// export default Projects
import React,{useEffect} from 'react'
import {
  Box,
  Text,
  Flex,
  Image,
  Divider,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./project.css"
import bansoi from "../../assets/bansoi.png"
import LOSE from "../../assets/LOSE.png";
import DNA from "../../assets/DNA.png"

const Projects = () => {

    const projects = [
      {
        id: 1,
        heading: "BANSOI WEBSITE CLONE",
        description:
          "Bonsai is a freelancing management app. It offers freelance proposals and contracts.",
        techs: [
          ["bx bxl-html5", "#f1a118"],
          ["bx bxl-css3", "#4e95e7"],
          ["bx bxl-javascript", "#f7df1a"],
          ["bx bxl-react", "#84e3e5"],
        ],
        link: "https://the-awesome-vinaykumar1801-site.netlify.app/",
        github: "https://github.com/VinayKumar1801/paltry-rain-9292",
        order: ["1", "2"],
        img: bansoi,
      },
      {
        id: 2,
        heading: "LOSE IT! WEBSITE CLONE",
        description:
          "Lose It! is a calorie counter and food diary diet app that helps you stick to your diet and achieve weight loss that fits!",
        techs: [
          ["bx bxl-html5", "#f1a118"],
          ["bx bxl-css3", "#4e95e7"],
          ["bx bxl-javascript", "#f7df1a"],
        ],
        link: "https://brilliant-moxie-01b056.netlify.app/landing%20page2.2/landing.html",
        github: "https://github.com/ranjanpalai69/malicious-thrill-8470",
        order: ["2", "1"],
        img: LOSE,
      },
      {
        id: 3,
        heading: "DNA NEWS WEBSITE CLONE",
        description:
          "Dna Latest breaking news, pictures, photos and Video News.",
        techs: [
          ["bx bxl-html5", "#f1a118"],
          ["bx bxl-css3", "#4e95e7"],
          ["bx bxl-javascript", "#f7df1a"],
        ],
        link: "https://stellular-meerkat-5bd6df.netlify.app/home.html",
        github: "https://github.com/VinayKumar1801/expert-iron-7655",
        order: ["1", "2"],
        img: DNA,
      },
    ];


     useEffect(() => {
       Aos.init({ duration: 1000 });
     }, []);

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">The things I make</span>
      {projects.map((elem) => (
        <Flex
          key={elem.id}
          textAlign="center"
          w={"75%"}
          m={"auto"}
          justify={"space-between"}
          mb={20}
          gap={{ md: "4", sm: "4", base: "4" }}
          boxShadow="2xl"
          p={{ lg: "10", md: "8", sm: "4", base: "4" }}
          rounded="md"
          bg="white"
          flexDirection={{
            lg: "row",
            md: "column",
            sm: "column",
            base: "column",
          }}
        >
          <Box
            w={{ lg: "50%", md: "100%", sm: "100%", base: "100%" }}
            m={"auto"}
            order={elem.order[0]}
          >
            <div
              style={{
                width: "100%",
                margin: "auto",
              }}
              data-aos="fade-up"
            data-aos-easing="ease-in"

            >
              <Box m={"auto"} w={{ md: "80%", sm: "90%", base: "90%" }}>
                <Heading color={"var(--text-color)"} fontWeight={"700"} fontSize={"25px"}>
                  {elem.heading}
                </Heading>
                <Divider mt={"2"} />
                <Text mt={"3"}>{elem.description}</Text>
              </Box>
              <Grid
                mt={5}
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2,1fr)"
                justifyContent={"center"}
                gap={3}
              >
                <GridItem rowSpan={1} colSpan={2}>
                  <Flex alignItems={"center"} wrap={"wrap"} gap={3} justifyContent={"center"}>
                    <Text fontWeight={"700"}>Tech stack : </Text>
                    {elem.techs.map((tech) => (
                      <i
                        key={tech[0]}
                        className={tech[0]}
                        style={{ color: tech[1], fontSize: "40px" }}
                      ></i>
                    ))}
                  </Flex>
                </GridItem>

                <GridItem colSpan={2} rowSpan={1}>
                  <Flex gap={4} justifyContent={"center"}>
                    <a
                      href={elem.link}
                      className="button button--flex"
                      target="_blank"
                      rel="noreferrer"
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
                      rel="noreferrer"
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
          </Box>
          <Box
            w={{ lg: "50%", md: "80%", sm: "80%", base: "80%" }}
            m={"auto"}
            order={elem.order[1]}
          >
            <div
              style={{
                width: "100%",
                margin: "auto",
              }}
              data-aos="fade-up"
              data-aos-easing="ease-in"
  
            >
              <Box m={"auto"} w={"full"}>
                <Image w={"100%"} m={"auto"} src={elem.img} alt="Dan Abramov" />
              </Box>
            </div>
          </Box>
        </Flex>
      ))}
    </section>
  );
}

export default Projects