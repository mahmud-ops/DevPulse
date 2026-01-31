import { Heading, VStack, Text } from "@chakra-ui/react"

interface Props {
    title: string;
    subtitle?: string;
}

const PageHeading = ({title,subtitle}: Props) => {
  return (
    <VStack align={'start'} mb={3}>
        <Heading>{title}</Heading>
        {subtitle && <Text>{subtitle}</Text>}
    </VStack>
  )
}

export default PageHeading