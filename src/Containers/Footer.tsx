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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);

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
    // Basic input sanitization
    const sanitizedValue = value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    setFormValues({ ...formValues, [name]: sanitizedValue });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    
    // Rate limiting - prevent multiple submissions
    const now = Date.now();
    if (now - lastSubmissionTime < 5000) { // 5 second cooldown
      alert("Please wait 5 seconds before submitting again.");
      return;
    }
    
    if (isSubmitting) {
      alert("Form is already being submitted. Please wait.");
      return;
    }

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
      setIsSubmitting(true);
      setLastSubmissionTime(Date.now());
      sendEmail();
    }
  }, [formErrors]);

  const validate = (values: IFormValues) => {
    const errors = {} as ErrorTypes;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    // Input length limits
    if (!values.from_name) {
      errors.from_name = "Name is required!";
    } else if (values.from_name.length > 100) {
      errors.from_name = "Name must be less than 100 characters";
    }
    
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    } else if (values.email.length > 254) {
      errors.email = "Email is too long";
    }
    
    if (!values.subject) {
      errors.subject = "Subject is required";
    } else if (values.subject.length > 200) {
      errors.subject = "Subject must be less than 200 characters";
    }
    
    if (!values.message) {
      errors.message = "Please write a message";
    } else if (values.message.length > 2000) {
      errors.message = "Message must be less than 2000 characters";
    } else if (values.message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return errors;
  };

  const sendEmail = () => {
    // Use environment variables for credentials (you'll need to set these)
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_3aw56lm";
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_ljeaxb2";
    const userId = process.env.REACT_APP_EMAILJS_USER_ID || "user_r3oQjkOJwhicHcPm2Fnpk";

    emailjs
      .send(serviceId, templateId, formValues, userId)
      .then(
        (result) => {
          console.log(result.text);
          setShowLoadingToast(false);
          setShowSuccessToast(true);
          setIsSubmitting(false);
          setFormValues(initialValues);
          setTimeout(() => {
            setShowSuccessToast(false);
          }, 7000);
        },
        (error) => {
          console.log(error.text);
          setShowLoadingToast(false);
          setIsSubmitting(false);
          alert("Failed to send message. Please try again later.");
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
          <strong>Ready to build something amazing?</strong> <br />
        </animated.h1>
        <div ref={triggerRef} />
        <h1 className="footer__contactHeader-subtitle">Let's discuss your project</h1>
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

      <div className="footer__contactInfo">
        <p>Available for new opportunities and interesting projects</p>
        <p>Based in San Francisco Bay Area</p>
      </div>

      <p className="footer__textBottom">
        © 2024 Justin Weisberg. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
