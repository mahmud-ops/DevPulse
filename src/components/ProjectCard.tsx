import {
  Text,
  Card,
  CardHeader,
  HStack,
  Heading,
  Badge,
  CardBody,
  SimpleGrid,
} from "@chakra-ui/react";
import { projects } from "../fakeDB";
import { Link } from "react-router-dom";

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

const ProjectCards = () => {
  return (
    <SimpleGrid spacing={4} columns={{
        base: 1,
        md: 2,
        lg:3
    }}>
      {projects.map((p) => (
        <Link to={`/projects/${p.id}`} key={p.id}>
          <Card
            borderRadius="xl"
            _hover={{ shadow: "md", transform: "translateY(-2px)" }}
            transition="all 0.2s ease"
          >
            <CardHeader pb={0}>
              <HStack justify="space-between">
                <Heading size="md">{p.name}</Heading>
                <Badge colorScheme={getStatusColor(p.status)}>{p.status}</Badge>
              </HStack>
            </CardHeader>

            <CardBody>
              <HStack spacing={3}>
                <Badge variant="subtle">{p.tag}</Badge>
                <Text fontSize="sm" color="gray.500">
                  Updated {p.last_updated}
                </Text>
              </HStack>
            </CardBody>
          </Card>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default ProjectCards;
