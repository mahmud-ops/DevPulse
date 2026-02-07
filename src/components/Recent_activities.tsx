import { Box, Card, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useRecentAction from "../hooks/useRecentAction";
import { projects } from "../fakeDB";
const RecentActivities = () => {
  let groupedActions = useRecentAction(projects);

  return (
    <VStack align="stretch">
      {Object.entries(groupedActions).map(([date, actions]) => (
        <Card key={date} p={4}>
          <Heading size="sm" mb={2}>
            {date}
          </Heading>

          <VStack align="start">
            {actions.map((action) => (
              <Box
                as={Link}
                to={`/projects/${action.projectId}`}
                key={action.projectId}
                _hover={{
                  color: "green.400",
                  transition: "color 0.3s"
                }}
              >
                • {action.message}→ {action.projectName}
              </Box>
            ))}
          </VStack>
        </Card>
      ))}
    </VStack>
  );
};

export default RecentActivities;
