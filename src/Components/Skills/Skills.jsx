import React from "react";
import "./skills.css";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
} from "@chakra-ui/react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import All from "./All";
import Tools from "./Tools";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>
      <div className="tabs__container">
        <Tabs variant="soft-rounded" colorScheme="pink">
          <TabList>
            <Flex w={"full"} direction={"row"} justify={"center"}>
              <Tab>All</Tab>
              <Tab>Frontend</Tab>
              <Tab>Backend</Tab>
              <Tab>Tools</Tab>
            </Flex>
          </TabList>
          <TabPanels>
            <TabPanel>
              <All />
            </TabPanel>
            <TabPanel>
              <Frontend/>
            </TabPanel>
            <TabPanel>
             <Backend/>
            </TabPanel>
            <TabPanel>
             <Tools/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
