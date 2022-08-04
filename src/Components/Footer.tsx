import "./Footer.css";
import { ReactComponent as Logo } from "../images/jweisberg__textlogo.svg";
import { useTheme } from "../ThemeManager";
import { ErrorTypes } from "../types";
import { IFormValues } from "../types";
import styled from "styled-components";
import * as themeConf from "../Theme";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { useEffect, useState } from "react";
import SocialIcons from "./SocialIcons";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import SubjectIcon from "@mui/icons-material/Subject";

const FormButton = styled.button`
  background-color: ${themeConf.linkColor};
  &:hover {
    background-color: ${themeConf.linkColorHover};
    border-radius: 10px;
    transition: 0.5s;
  }
`;

function Footer() {
  const initialValues = { from_name: "", email: "", subject: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<any>({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [ShowSuccessAlert, setShowSuccessAlert] = useState(false);
  const [ShowErrorAlert, setShowErrorAlert] = useState(false);
  const [ShowLoadingAlert, setShowLoadingAlert] = useState(false);

  const theme = useTheme();

  const toggleThemeSwitchValue = (): boolean => {
    if (theme.mode === "light") {
      return false;
    } else {
      return true;
    }
  };

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length > 0 && isSubmit) {
      setShowErrorAlert(true);
      setTimeout(() => {
        setIsSubmit(false);
        setShowErrorAlert(false);
      }, 500);
    }

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setShowLoadingAlert(true);
      sendEmail();
    }
  }, [formErrors]);

  const validate = (values: IFormValues) => {
    const errors = {} as ErrorTypes;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.from_name) {
      errors.from_name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.subject) {
      errors.subject = "Subject is required";
    }
    if (!values.message) {
      errors.message = "Please write a message";
    }

    return errors;
  };

  const sendEmail = () => {
    emailjs
      .send(
        "service_3aw56lm",
        "template_ljeaxb2",
        formValues,
        "user_r3oQjkOJwhicHcPm2Fnpk"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowLoadingAlert(false);
          setShowSuccessAlert(true);
          setFormValues(initialValues);
          setTimeout(() => {
            setShowSuccessAlert(false);
          }, 4000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="footer">
      {/* <Logo
        className="footer__logo"
        fill={toggleThemeSwitchValue() ? "#fff" : "#8A8A8A"}
      /> */}
      <h1 className="footer__contactHeader">Let's Chat! 📬</h1>
      <form onSubmit={handleSubmit}>
        <p className="alert__text">{formErrors.from_name}</p>

        <div className="footer__input-contain">
          <AccountCircleIcon />
          <input
            name="from_name"
            placeholder="Name"
            type="text"
            value={formValues.from_name}
            onChange={handleChange}
          />
        </div>

        <p className="alert__text">{formErrors.email}</p>

        <div className="footer__input-contain">
          <EmailIcon />
          <input
            name="email"
            placeholder="Email"
            type="email"
            aria-describedby="emailHelp"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>

        <p className="alert__text">{formErrors.subject}</p>
        <div className="footer__input-contain">
          <SubjectIcon />
          <input
            name="subject"
            placeholder="Subject"
            type="subject"
            className="form__control--subject"
            value={formValues.subject}
            onChange={handleChange}
          />
        </div>

        <p className="alert__text">{formErrors.message}</p>
        <textarea
          name="message"
          placeholder="Message"
          value={formValues.message}
          onChange={handleChange}
        />

        <FormButton type="submit" value="Send">
          Submit
        </FormButton>
      </form>

      <SocialIcons />

      <p className="footer__textBottom">
        Designed and built by Justin Weisberg. 2021
      </p>

      {/* ~~~~~~~~~~ALERT FLAGS~~~~~~~~~~~~ */}
      <div
        className={`alert__success ${
          ShowSuccessAlert ? "alert-shown" : "alert__hidden"
        }`}
        onTransitionEnd={() => setShowSuccessAlert(false)}
      >
        <h1>Success! 🎉 </h1>
        <p>Thank you for reaching out. I will get back to you ASAP</p>
      </div>

      <div
        className={`alert__error ${
          ShowErrorAlert ? "alert__shown" : "alert__hidden"
        }`}
        onTransitionEnd={() => setShowErrorAlert(false)}
      >
        <h2>There were some issues...😕 </h2>
        <p>Please fill out the form correctly</p>
      </div>

      <div
        className={`alert__loading ${
          ShowLoadingAlert ? "alert-shown" : "alert__hidden--noanimate"
        }`}
        onTransitionEnd={() => setShowSuccessAlert(false)}
      >
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
