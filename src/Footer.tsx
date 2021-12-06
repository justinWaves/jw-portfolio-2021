import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
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

        <button type="submit" className="footer__formButton">
          Submit
        </button>
      </form>

      <div className="footer__socialContainer">
        <InstagramIcon className="socialIcon" sx={{ fontSize: 40 }} />
        <FacebookIcon className="socialIcon" sx={{ fontSize: 40 }} />
        <GitHubIcon className="socialIcon" sx={{ fontSize: 40 }} />
        <LinkedInIcon className="socialIcon" sx={{ fontSize: 40 }} />
      </div>
      <p className="footer__textBottom">
        Designed and built by Justin Weisberg. 2021
      </p>
    </div>
  );
}

export default Footer;
