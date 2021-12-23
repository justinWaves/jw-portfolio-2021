import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "styled-components";
import * as themeConf from "../Theme";

const SocialIconsContain = styled.div`
  display: flex;
  margin-bottom: 5px;

  & > a {
    padding: 2px;
    cursor: pointer;
    color: ${themeConf.textColor};
  }
`;

function SocialIcons() {
  return (
    <>
      <SocialIconsContain>
        <a
          href="https://www.instagram.com/justinwaves/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon sx={{ fontSize: 40 }} />
        </a>

        <a
          href="https://www.facebook.com/jweisberg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon sx={{ fontSize: 40 }} />
        </a>

        <a
          href="https://github.com/justinWaves"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon sx={{ fontSize: 40 }} />
        </a>

        <a
          href="https://www.linkedin.com/in/justinbweisberg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon sx={{ fontSize: 40 }} />
        </a>
      </SocialIconsContain>
    </>
  );
}

export default SocialIcons;
