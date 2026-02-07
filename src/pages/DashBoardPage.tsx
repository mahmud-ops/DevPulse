import { Box, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import {
  MdCheckCircle,
  MdFolder,
  MdPauseCircle,
  MdPlayCircle,
} from "react-icons/md";
import PageHeading from "../components/PageHeading";
import StatsCard from "../components/StatsCard";
import { projects } from "../fakeDB";
import CountUp from "react-countup";
import RecentActivities from "../components/Recent_activities";

const DashBoardPage = () => {
  const totalProjects = projects.length;
  const activeProjects = projects.filter((p) => p.status === "Active").length;
  const completedProjects = projects.filter(
    (p) => p.status === "Completed",
  ).length;
  const pausedProjects = projects.filter((p) => p.status === "Paused").length;

  return (
    <>
      <PageHeading title="Dashboard" />

      <SimpleGrid columns={{ base: 1, md: 4 }}>
        <GridItem
          colSpan={{
            base: 1,
            md: 4,
            lg: 3,
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
        <GridItem colSpan={1} mx={2}>
          <Heading size={"lg"}>Recent actions</Heading>
          <Box mt={2} height={"60vh"} overflow={"auto"}>
            <hr />
            <RecentActivities />
          </Box>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default DashBoardPage;
