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
import HUB from "../../assets/hub.jpg"
import TEMP from "../../assets/temp.jpg"
import SHOP from "../../assets/shop.jpg"
import FRESHLY from "../../assets/freshly.jpg"

const Projects = () => {

    const projects = [
      {
        id: 1,
        heading: "Freshly Wwbsite Clone",
        description:
          "Freshly is a weekly subscription that delivers fresh meals. Created Carts, Products, Users, Admin API ( Back-End ). Except Payment Page Completed All Pages ( Front-End ). It was a collaborative project.",
        techs: [
          ["bx bxl-html5", "#f1a118"],
          ["bx bxl-css3", "#4e95e7"],
          ["bx bxl-javascript", "#f7df1a"],
          ["bx bxl-react", "#84e3e5"],
          ["bx bxl-mongodb", "rgb(60, 135, 58)"],
          ["bx bxl-nodejs", "rgb(60, 135, 58)"],
          ["bx bxl-expressjs", "#84e3e5"],
          ["bx bxl-redux", "#84e3e5"],
        ],
        link: "https://sophisticated-legs-486.netlify.app/",
        github: "https://github.com/Dhamisir/Freshly-Website-Clone",
        order: ["1", "2"],
        img: FRESHLY,
      },
      {
        id: 2,
        heading: "Entertainment Hub",
        description:
          "Website contains the most recent movies, TV series, as well as a search engine where you can locate your favorite movies, TV shows, as well as watch trailers on YouTube.",
        techs: [
          ["bx bxl-html5", "#f1a118"],
          ["bx bxl-css3", "#4e95e7"],
          ["bx bxl-javascript", "#f7df1a"],
          ["bx bxl-react", "#84e3e5"],
        ],
        link: "https://melodious-bublanina-1fa662.netlify.app/",
        github: "https://github.com/VinayKumar1801/entertainment-hub",
        order: ["2", "1"],
        img: HUB,
      },
      {
        id: 3,
        heading: "Weather App",
        description:
          "Stay on top of the weather with our easy-to-use website. Get real-time updates, hourly and 5-day forecasts, and severe weather alerts for your location. View radar maps and track storms. Plan your day or week with confidence using our accurate weather information.",
        techs: [
          ["bx bxl-html5", "#f1a118"],
          ["bx bxl-css3", "#4e95e7"],
          ["bx bxl-javascript", "#f7df1a"],
          ["bx bxl-react", "#84e3e5"],
        ],
        link: "https://gentle-bubblegum-4e2398.netlify.app/",
        github: "https://github.com/VinayKumar1801/weather-app",
        order: ["1", "2"],
        img: TEMP,
      },
      {
        id: 4,
        heading: "Shopping Cart",
        description:
          "Shopping Cart with TypeScript, add items, remove items from the cart and check the total amount of cart.",
        techs: [
          ["bx bxl-html5", "#f1a118"],
          ["bx bxl-css3", "#4e95e7"],
          // ["bx bxl-javascript", "#f7df1a"],
          ["bx bxl-typescript", "#4e95e7"],
          ["bx bxl-react", "#84e3e5"],
        ],
        link: "https://remarkable-fenglisu-0ae63b.netlify.app/store",
        github: "https://github.com/VinayKumar1801/typescript_project",
        order: ["2", "1"],
        img: SHOP,
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