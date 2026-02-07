import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useColorMode } from "@chakra-ui/react";

const MUIThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { colorMode } = useColorMode(); // light | dark

  const theme = createTheme({
    palette: {
      mode: colorMode, // sync with Chakra
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MUIThemeWrapper;
