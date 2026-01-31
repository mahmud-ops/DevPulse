import {
  VStack,
  Card,
  CardBody,
  HStack,
  Text,
  Heading,
} from "@chakra-ui/react";
import { projects } from "../fakeDB";
import { useParams } from "react-router-dom";

const RecentActions = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  return (
    <>
      <Heading size={'lg'} my={4}>Activity</Heading>
      <VStack spacing={3} align="stretch">
        {project?.recent_actions.map((action, index) => (
          <Card
            key={index}
            borderRadius="md"
            shadow="sm"
            _hover={{ shadow: "md" }}
          >
            <CardBody>
              <HStack justify="space-between">
                <Text>{action.message}</Text>
                <Text fontSize="sm" color="gray.500">
                  {action.date}
                </Text>
              </HStack>
            </CardBody>
          </Card>
        ))}
      </VStack>
    </>
  );
};

export default RecentActions;
