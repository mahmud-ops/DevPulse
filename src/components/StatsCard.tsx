import { Card, CardBody, VStack, Heading, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: ReactNode
}

const StatsCard = ({ title, value, icon }: StatsCardProps) => {
  return (
    <Card borderRadius={'xl'}>
      <CardBody>
        <VStack spacing={4}>
          <Heading size="2xl" color="teal.500">
            {value}
          </Heading>
          <Text fontSize="lg" color="gray.600" fontWeight="semibold">
            {title}
          </Text>
          <span>{icon}</span>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default StatsCard;
