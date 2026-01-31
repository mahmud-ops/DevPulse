import { Grid, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";

const AppLayouts = () => {
  return (
    <Grid
      templateAreas={{
        base: `"topbar" "main"`,
        md: `"topbar topbar" "sidebar main"`,
      }}
      gridTemplateRows={{ base: "auto 1fr", md: "auto 1fr" }}
      gridTemplateColumns={{ base: "1fr", md: "250px 1fr" }}
      height="100vh"
    >
      <Box gridArea="topbar" p={4}>
        <TopBar />
      </Box>
      <Box gridArea="sidebar" p={4} display={{ base: "none", md: "block" }}>
        <Sidebar />
      </Box>
      <Box gridArea="main" p={4} overflowY="auto">
        <Outlet />
      </Box>
    </Grid>
  );
};

export default AppLayouts;
