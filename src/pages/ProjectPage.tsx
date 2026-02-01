import { Box, HStack, SimpleGrid } from "@chakra-ui/react";
import DropDownMenu from "../components/DropDownMenu";
import PageHeading from "../components/PageHeading";
import SearchInput from "../components/SearchInput";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";
import useProjects from "../hooks/useProjects";

const tags = ["All", "Personal", "Client", "Learning"];
const status = ["All","Completed", "Active", "Paused"];

const ProjectPage = () => {

  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchInput, setSearchInput] = useState("");

  const projects = useProjects({
    tag: selectedTag,
    status: selectedStatus,
    searchInput
  })

  return (
    <>
      <PageHeading title="Projects" />

      <HStack justifyContent={"end"} w={"100%"} my={3}>
        <DropDownMenu name={"Tag"} options={tags} onSelect={setSelectedTag}/>
        <DropDownMenu name={"Status"} options={status} onSelect={setSelectedStatus}/>
        <SearchInput value={searchInput} onChange={setSearchInput}/>
      </HStack>

      <Box>
        <SimpleGrid spacing={4} columns={{ base: 1, md: 2, lg: 3 }}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default ProjectPage;
