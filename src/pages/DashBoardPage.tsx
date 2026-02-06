import { GridItem, SimpleGrid } from "@chakra-ui/react";
import {
  MdCheckCircle,
  MdFolder,
  MdPauseCircle,
  MdPlayCircle,
} from "react-icons/md";
import PageHeading from "../components/PageHeading";
import StatsCard from "../components/StatsCard";
import { projects } from "../fakeDB";

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

      <SimpleGrid columns={{base: 1,md: 4}}>
        <GridItem colSpan={{
          base: 1,
          md: 4,
          lg:3
        }}>
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
              value={totalProjects}
            />
            <StatsCard
              icon={<MdPlayCircle size={35} />}
              title="Active projects"
              value={activeProjects}
            />
            <StatsCard
              icon={<MdCheckCircle size={35} />}
              title="Completed projects"
              value={completedProjects}
            />
            <StatsCard
              icon={<MdPauseCircle size={35} />}
              title="Paused projects"
              value={pausedProjects}
            />
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default DashBoardPage;
