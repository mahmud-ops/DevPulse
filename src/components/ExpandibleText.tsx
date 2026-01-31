import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const limit = 500;

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  return (
    <>
      <Text>
        {isExpanded ? children : `${children.slice(0, limit)}...`}
      </Text>
      <Button
        mt={2}
        size="sm"
        variant="link"
        colorScheme="blue"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "See less" : "See more"}
      </Button>
    </>
  );
};

export default ExpandableText;
