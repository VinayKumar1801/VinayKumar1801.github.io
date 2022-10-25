import React from 'react'
import GitHubCalender from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { Box } from '@chakra-ui/react';
const Calender = () => {
    const selectLastHalfYear = (contributions) => {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      const shownMonths = 10;

      return contributions.filter((day) => {
        const date = new Date(day.date);
        const monthOfDay = date.getMonth();

        return (
          date.getFullYear() === currentYear &&
          monthOfDay > currentMonth - shownMonths &&
          monthOfDay <= currentMonth
        );
      });
    };
  return (
    <Box  textAlign={"center"} w={"75%"} m={"auto"} mb={20}>
      <h2 className="section__title">My Github Calender</h2>
      <Box
        m={"auto"}
        mt={"7"}
      >
        <GitHubCalender
          username="VinayKumar1801"
          transformData={selectLastHalfYear}
          blockSize={20}
          fontSize={18}
          hideColorLegend
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalender>
      </Box>
    </Box>
  );
}

export default Calender
