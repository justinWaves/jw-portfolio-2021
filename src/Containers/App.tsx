import Header from "./Header";
import City from "./City";
import Bio from "./Bio";
import Projects from "./Projects";
import Footer from "./Footer";
import * as themeConf from "../Theme";
import styled, { ThemeProvider } from "styled-components";
import { useTheme } from "../ThemeManager";

const AppBody = styled.div`
  background-color: ${themeConf.backgroundColor};
  color: ${themeConf.textColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
`;

const App: React.FC = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={{ mode: theme.mode || "light" }}>
      <AppBody>
        <Header />
        <City />
        <Bio />
        <Projects />
        <Footer />
      </AppBody>
    </ThemeProvider>
  );
};

export default App;
