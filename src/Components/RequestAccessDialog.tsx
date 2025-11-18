import "./RequestAccessDialog.css";
import styled from "styled-components";
import * as themeConf from "../Theme";
import { useState } from "react";
import { createPortal } from "react-dom";
import emailjs from "emailjs-com";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const DialogContainer = styled.div`
  background-color: ${themeConf.backgroundColor};
  color: ${themeConf.textColor};
  border-radius: 20px;
  padding: 30px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: ${themeConf.textColor};
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const SubmitButton = styled.button`
  background-color: ${themeConf.linkColor};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px 30px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  box-shadow: 3px 3px 10px #00000050;
  transition: 0.3s;

  &:hover {
    background-color: ${themeConf.linkColorHover};
    border-radius: 10px;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background-color: green;
  color: white;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  margin-top: 20px;
  font-weight: 700;
`;

interface RequestAccessDialogProps {
  projectName: string;
  onClose: () => void;
}

function RequestAccessDialog({ projectName, onClose }: RequestAccessDialogProps) {
  const [formValues, setFormValues] = useState({ name: "", email: "" });
  const [formErrors, setFormErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.target as HTMLInputElement;
    const sanitizedValue = value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    setFormValues({ ...formValues, [name]: sanitizedValue });
  };

  const validate = () => {
    const errors: any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formValues.name) {
      errors.name = "Name is required!";
    } else if (formValues.name.length > 100) {
      errors.name = "Name must be less than 100 characters";
    }

    if (!formValues.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(formValues.email)) {
      errors.email = "This is not a valid email format!";
    } else if (formValues.email.length > 254) {
      errors.email = "Email is too long";
    }

    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      sendAccessRequest();
    }
  };

  const sendAccessRequest = () => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_3aw56lm";
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_ljeaxb2";
    const userId = process.env.REACT_APP_EMAILJS_USER_ID || "user_r3oQjkOJwhicHcPm2Fnpk";

    const emailData = {
      from_name: formValues.name,
      email: formValues.email,
      subject: `Access Request for ${projectName}`,
      message: `${formValues.name} (${formValues.email}) has requested access to view the ${projectName} project.`,
    };

    emailjs
      .send(serviceId, templateId, emailData, userId)
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitting(false);
          setIsSuccess(true);
          setTimeout(() => {
            onClose();
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
          alert("Failed to send request. Please try again later.");
        }
      );
  };

  return createPortal(
    <DialogOverlay onClick={onClose}>
      <DialogContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>

        <h2 style={{ marginTop: 0, marginBottom: 10 }}>Request Access</h2>
        <p style={{ marginBottom: 20, opacity: 0.8 }}>
          {projectName} is a private project. Please provide your information and I'll send you a link.
        </p>

        {isSuccess ? (
          <SuccessMessage>
            <h3>Request Sent! 🎉</h3>
            <p>I'll send you access details shortly.</p>
          </SuccessMessage>
        ) : (
          <form onSubmit={handleSubmit}>
            <p className="alert__text">{formErrors.name}</p>
            <div className="dialog__input-contain">
              <AccountCircleIcon />
              <input
                name="name"
                placeholder="Your Name*"
                type="text"
                value={formValues.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <p className="alert__text">{formErrors.email}</p>
            <div className="dialog__input-contain">
              <EmailIcon />
              <input
                name="email"
                placeholder="Your Email*"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Request Link"}
            </SubmitButton>
          </form>
        )}
      </DialogContainer>
    </DialogOverlay>,
    document.body
  );
}

export default RequestAccessDialog;

