import { Box, Card, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import CountUp from "react-countup";

import {
  MdCheckCircle,
  MdFolder,
  MdPauseCircle,
  MdPlayCircle,
} from "react-icons/md";

import AnalyticsPieChart from "../components/AnalyticsPieChart";
import PageHeading from "../components/PageHeading";
import RecentActivities from "../components/Recent_activities";
import StatsCard from "../components/StatsCard";

import {
  activeProjects,
  completedProjects,
  pausedProjects,
  stateData,
  tagData,
  totalProjects,
} from "../features/ProjectAnalytics";

const DashBoardPage = () => {
  return (
    <>
      <PageHeading title="Dashboard" />

      <SimpleGrid columns={{ base: 1, md: 3 }}>
        <GridItem
          colSpan={{
            base: 1,
            md: 3,
            lg: 2,
          }}
        >
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
            }}
            spacing={3}
            mx={"auto"}
          >
            <StatsCard
              icon={<MdFolder size={35} />}
              title="Total projects"
              value={<CountUp end={totalProjects} duration={5} />}
            />
            <StatsCard
              icon={<MdPlayCircle size={35} />}
              title="Active projects"
              value={<CountUp end={activeProjects} duration={5} />}
            />
            <StatsCard
              icon={<MdCheckCircle size={35} />}
              title="Completed projects"
              value={<CountUp end={completedProjects} duration={5} />}
            />
            <StatsCard
              icon={<MdPauseCircle size={35} />}
              title="Paused projects"
              value={<CountUp end={pausedProjects} duration={5} />}
            />
          </SimpleGrid>
        </GridItem>

        {/* recent_actions */}
        <GridItem
          colSpan={{
            base: 1,
            md: 3,
            lg: 1,
          }}
          mx={2}
        >
          <Heading size={"lg"}>Recent actions</Heading>
          <Box mt={2} height={"330px"} overflow={"auto"}>
            <hr />
            <RecentActivities />
          </Box>
        </GridItem>
      </SimpleGrid>

      <br />
      <hr />

      <Heading as={GridItem} colSpan={3} textAlign={"center"}>
        Metrics
      </Heading>
      <SimpleGrid
        spacing={2}
        mt={4}
        columns={{
          base: 1,
          lg: 2,
        }}
      >
        <GridItem as={Card} colSpan={1} p={2}>
          <Heading size={"md"} textAlign={"center"}>
            Status
          </Heading>
          <AnalyticsPieChart
            colors={["#4FD1C5", "#F6E05E", "#FC8181"]}
            data={stateData}
          />
        </GridItem>
        <GridItem as={Card} colSpan={1} p={2}>
          <Heading size={"md"} textAlign={"center"}>
            Tag
          </Heading>
          <AnalyticsPieChart
            colors={["#9F7AEA", "#D69E2E", "#63B3ED"]}
            data={tagData}
          />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default DashBoardPage;
