import Header from "./Components/Header";
import City from "./Components/City";
import Bio from "./Components/Bio";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import * as themeConf from "./Theme";
import styled, { ThemeProvider } from "styled-components";
import { useTheme } from "./ThemeManager";

const AppBody = styled.div`
  background-color: ${themeConf.backgroundColor};
  color: ${themeConf.textColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
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
