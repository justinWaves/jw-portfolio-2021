import "./Footer.css";
import EmailForm from "../Components/EmailForm";
import { ErrorTypes } from "../types";
import { IFormValues } from "../types";
import emailjs from "emailjs-com";
import { useEffect, useState, useRef } from "react";
import useIntersectionObserver from "../Hooks/intersection-observer";
import { animated, useSpring, config } from "react-spring";
import SocialIcons from "../Components/SocialIcons";

function Footer() {
  const initialValues = { from_name: "", email: "", subject: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<any>({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showLoadingToast, setShowLoadingToast] = useState(false);

  const triggerRef = useRef<HTMLDivElement>(null);
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false,
  });

  const footerHeaderAnimation = useSpring({
    config: config.wobbly,
    from: { opacity: 0, transform: "skew(0deg, 0deg)" },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      transform: dataRef?.isIntersecting
        ? "skew(0deg, 0deg)"
        : "skew(-50deg, 0deg)",
    },
  });

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
      setTimeout(() => {
        setIsSubmit(false);
      }, 500);
    }

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setShowLoadingToast(true);
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
          setShowLoadingToast(false);
          setShowSuccessToast(true);
          setFormValues(initialValues);
          setTimeout(() => {
            setShowSuccessToast(false);
          }, 7000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="footer">
      <div className="footer__contactHeader">
        <animated.h1
          style={footerHeaderAnimation}
          className="footer__contactHeader-title"
        >
          <strong> Inquiries?</strong> Good Jokes? <br />
        </animated.h1>
        <div ref={triggerRef} />
        <h1 className="footer__contactHeader-subtitle">Reach out Below! 📬</h1>
      </div>

      <EmailForm
        formValues={formValues}
        formErrors={formErrors}
        showToast={showSuccessToast}
        showLoadingToast={showLoadingToast}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <SocialIcons />

      <p className="footer__textBottom">
        Designed and built by Justin Weisberg 2022
      </p>
    </div>
  );
}

export default Footer;
