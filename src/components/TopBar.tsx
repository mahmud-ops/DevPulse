import { Box, HStack } from "@chakra-ui/react";
import { MdAccountCircle, MdBarChart } from "react-icons/md";
import ThemeSwitch from "./ThemeSwitch";
import SearchInput from "./SearchInput";

const TopBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Box>
        <MdBarChart size={"25px"} />
      </Box>
      <SearchInput />
      <HStack>
        <MdAccountCircle size={35} />
        <ThemeSwitch />
      </HStack>
    </HStack>
  );
};

export default TopBar;
