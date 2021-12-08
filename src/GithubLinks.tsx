import GitHubIcon from "@mui/icons-material/GitHub";
import "./GithubLinks.css";
import * as themeConf from "./Theme";
import styled from "styled-components";

interface GitHubPropTypes {
  codeUrl: string;
  linkUrl: string;
}

function GithubLinks({ codeUrl, linkUrl }: GitHubPropTypes) {
  const GitHubLink = styled.button`
    background-color: ${themeConf.linkColor};
    color: white;
  `;

  return (
    <div className="github__container">
      <GitHubLink>
        <GitHubIcon className="gh__icon" sx={{ fontSize: 40 }} /> View Code
      </GitHubLink>
    </div>
  );
}

export default GithubLinks;
