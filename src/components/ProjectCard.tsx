import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Text
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import type Project from "../types/Project";

export const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "green";
    case "Paused":
      return "red";
    case "Active":
      return "yellow";
    default:
      return "gray";
  }
};

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Link to={`/projects/${project.id}`}>
      <Card
        borderRadius="xl"
        _hover={{ shadow: "md", transform: "translateY(-2px)" }}
        transition="all 0.2s ease"
      >
        <CardHeader pb={0}>
          <HStack justify="space-between">
            <Heading size="md">{project.name}</Heading>
            <Badge colorScheme={getStatusColor(project.status)}>{project.status}</Badge>
          </HStack>
        </CardHeader>

        <CardBody>
          <HStack spacing={3}>
            <Badge variant="subtle">{project.tag}</Badge>
            <Text fontSize="sm" color="gray.500">
              Updated {project.last_updated}
            </Text>
          </HStack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProjectCard;
