import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "styled-components";
import { useTheme } from "./ThemeManager";

function Footer() {
  const theme = useTheme();

  const SocialIcons = styled.div`
    display: flex;
    margin-bottom: 5px;
  `;

  // const toggleIcons = (): string => {
  //   if (theme.mode === "light") {
  //     return "socialIcon-light";
  //   } else {
  //     return "socialIcon--dark";
  //   }
  // };

  return (
    <div className="footer">
      <h1 className="footer__contactHeader">Let's get in touch!</h1>
      <form id="contact-form" method="POST">
        <input placeholder="Name" type="text" className="form-control" />

        <input
          placeholder="Email"
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
        />

        <textarea placeholder="Message" className="form-control"></textarea>

        <button
          type="submit"
          className="footer__formButton"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Submit
        </button>
      </form>

      <SocialIcons>
        <InstagramIcon sx={{ fontSize: 40 }} />
        <FacebookIcon sx={{ fontSize: 40 }} />
        <GitHubIcon sx={{ fontSize: 40 }} />
        <LinkedInIcon sx={{ fontSize: 40 }} />
      </SocialIcons>
      <p className="footer__textBottom">
        Designed and built by Justin Weisberg. 2021
      </p>
    </div>
  );
}

export default Footer;
