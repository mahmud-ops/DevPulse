import { VStack, Text } from "@chakra-ui/react";
import SidebarItem from "./SidebarItem";
import { MdAnalytics, MdDashboard, MdFolder, MdSettings } from "react-icons/md";
import { useLocation } from "react-router-dom";

const items = [
  { url: "/dashboard", label: "Dashboard", icon: <MdDashboard /> },
  { url: "/projects", label: "Projects", icon: <MdFolder /> },
  { url: "/analytics", label: "Analytics", icon: <MdAnalytics /> },
  { url: "/settings", label: "Settings", icon: <MdSettings /> },
];

const Sidebar = () => {
  const location = useLocation(); // current URL

  return (
    <VStack align="stretch" w="240px" spacing={2} p={2}>
      {items.map((i) => (
        <SidebarItem
          key={i.url}
          url={i.url}
          isActive={
            i.url === "/projects"
              ? location.pathname.startsWith(i.url)
              : location.pathname === i.url
          }
        >
          {i.icon}
          <Text>{i.label}</Text>
        </SidebarItem>
      ))}
    </VStack>
  );
};

export default Sidebar;
