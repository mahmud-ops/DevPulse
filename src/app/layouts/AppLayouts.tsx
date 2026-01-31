import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AppLayouts = () => {
  return (
    <>
      <Box>TopBar</Box>
      <Box>SideBar</Box>
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default AppLayouts;
