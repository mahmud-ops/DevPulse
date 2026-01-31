import {
  Badge,
  Button,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import PageHeading from "../components/PageHeading";
import { getStatusColor } from "../components/ProjectCard";
import { projects } from "../fakeDB";
import RecentActions from "../components/RecentActions";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <PageHeading title="Project not found" subtitle="" />;
  }

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 3,
      }}
    >
      <GridItem colSpan={2}>
        <PageHeading
          title={project.name}
          subtitle="Project details and activity"
        />

      <Text mb={2}>
        {" "}
        Status:
        <Badge colorScheme={getStatusColor(project.status)}>
          {project.status}
        </Badge>
      </Text>

      <Text mb={2}>
        Tag:
        <Badge>{project.tag}</Badge>
      </Text>

      <Text mb={2} color={"gray.600"}>
        Last updated {project.last_updated}
      </Text>

      <Text>
        lorem300
      </Text>

      </GridItem>

      <GridItem colSpan={1}>
      <RecentActions />
      </GridItem>

      <HStack my={3}>
        <Button disabled variant={"solid"} colorScheme="cyan">
          Edit project
        </Button>
        <Button disabled variant={"solid"} colorScheme="cyan">
          Add task
        </Button>
      </HStack>
    </SimpleGrid>
  );
};

export default ProjectDetailsPage;
