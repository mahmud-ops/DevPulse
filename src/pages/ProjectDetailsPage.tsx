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
import ExpandibleText from "../components/ExpandibleText";

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

      spacing={3}
    >
      <GridItem colSpan={{
        base: 3,
        lg: 2
      }}>
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

      <ExpandibleText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, necessitatibus nobis? Animi maxime temporibus optio, expedita commodi quisquam delectus eos dolores consequuntur a magnam, ad unde fugiat possimus quae molestias vero vitae aperiam reprehenderit eaque magni. Assumenda inventore minus porro dicta adipisci repellat, blanditiis recusandae quia enim dolorem expedita asperiores dolorum nostrum fugiat quisquam est. Consequatur ratione consequuntur obcaecati blanditiis incidunt eaque facere deleniti repellat laudantium, at, fugiat aliquid quidem hic velit nostrum ipsa magnam ipsum quasi qui! Maxime, ex praesentium architecto unde minima fugiat expedita harum saepe sint repellat delectus doloremque, distinctio quia perferendis eius voluptates sequi soluta dolores voluptatibus non porro obcaecati quidem. Minus culpa at facere dignissimos ullam neque veritatis. Ipsa itaque eligendi facilis modi optio numquam maiores repellendus veniam error necessitatibus? Fugit iusto ab officia quos aperiam praesentium quisquam sequi, repellendus reiciendis possimus hic ipsum alias ipsa corporis nisi et laborum quis expedita temporibus consequuntur facilis quibusdam libero sunt! Quibusdam dolorum dignissimos, repudiandae nisi beatae, delectus, corrupti sed quis expedita commodi voluptatum accusamus quia reprehenderit eum culpa maiores esse praesentium vitae voluptatibus explicabo tenetur laboriosam dicta. A eligendi modi ea delectus consectetur, debitis pariatur quidem repudiandae, labore autem, praesentium quasi quod nostrum. Delectus nisi magni inventore sit quo qui illum necessitatibus, ad minus facilis, excepturi ipsam saepe at ex fuga cumque placeat minima consequatur vitae voluptatem, eaque explicabo? Culpa sequi itaque tenetur voluptates quidem, quae quia alias iste optio dolorum nam ipsam qui nemo cum nesciunt ipsa quaerat nisi assumenda a voluptate reprehenderit omnis dolore rem vitae. Tenetur deserunt aliquam dolorem eius praesentium nihil quaerat numquam quidem ab placeat velit eum ex est maxime necessitatibus, excepturi suscipit ratione eaque, incidunt debitis facere libero officia? Ad temporibus nostrum expedita ipsum, in doloribus explicabo minus? Iste quisquam quasi doloribus repellendus pariatur aspernatur nostrum vitae consectetur! Labore, molestias delectus.
      </ExpandibleText>

      </GridItem>

      <GridItem colSpan={{
        base: 3,
        lg: 1
      }}>
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
