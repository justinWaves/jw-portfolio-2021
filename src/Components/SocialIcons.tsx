import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import styled from "styled-components";
import * as themeConf from "../Theme";

const SocialIconsContain = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 20px;
  & > a {
    padding: 8px;
    cursor: pointer;
    color: ${themeConf.textColor};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${themeConf.linkColor};
    }
  }
`;

function SocialIcons() {
  return (
    <>
      <SocialIconsContain>
        <a
          href="mailto:justin@justinweisberg.com"
          title="Email"
        >
          <EmailIcon sx={{ fontSize: 32 }} />
        </a>

        <a
          href="https://github.com/justinWaves"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <GitHubIcon sx={{ fontSize: 32 }} />
        </a>

        <a
          href="https://www.linkedin.com/in/justinbweisberg/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <LinkedInIcon sx={{ fontSize: 32 }} />
        </a>
      </SocialIconsContain>
    </>
  );
}

export default SocialIcons;
