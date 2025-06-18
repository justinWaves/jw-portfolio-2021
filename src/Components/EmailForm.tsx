import "./EmailForm.css";
import { EmailFormTypes } from "../types";
import styled from "styled-components";
import * as themeConf from "../Theme";
import { useState, useEffect } from "react"; // <-- add useEffect
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

const LoadingAlert = styled.div`
  background-color: ${themeConf.linkColor};
`;

function EmailForm({
  formValues,
  formErrors,
  showToast,
  showLoadingToast,
  handleChange,
  handleSubmit,
}: EmailFormTypes) {
  const [showSuccessToast, setShowSuccessToast] = useState(showToast);

  // Add this useEffect to sync showSuccessToast with showToast prop
  useEffect(() => {
    setShowSuccessToast(showToast);
  }, [showToast]);

  return (
    <div className="emailForm">
      <form onSubmit={handleSubmit}>
        <p className="alert__text">{formErrors.from_name}</p>

        <div className="emailForm__input-contain">
          <AccountCircleIcon />
          <input
            name="from_name"
            placeholder="Name*"
            type="text"
            value={formValues.from_name}
            onChange={handleChange}
          />
        </div>

        <p className="alert__text">{formErrors.email}</p>

        <div className="emailForm__input-contain">
          <EmailIcon />
          <input
            name="email"
            placeholder="Email*"
            type="email"
            aria-describedby="emailHelp"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>

        <p className="alert__text">{formErrors.subject}</p>
        <div className="emailForm__input-contain">
          <SubjectIcon />
          <input
            name="subject"
            placeholder="Subject*"
            type="subject"
            className="form__control--subject"
            value={formValues.subject}
            onChange={handleChange}
          />
        </div>

        <p className="alert__text">{formErrors.message}</p>
        <textarea
          name="message"
          placeholder="Message*"
          value={formValues.message}
          onChange={handleChange}
        />
        {showLoadingToast || showToast ? (
          <div>
            {/* ~~~~~~~~~~ALERT FLAGS~~~~~~~~~~~~ */}
            <div
              className={`alert__success ${
                showSuccessToast ? "alert-shown" : "alert__hidden"
              }`}
              onTransitionEnd={() => setShowSuccessToast(false)}
            >
              <h1>Success! 🎉 </h1>
              <p>Thank you for reaching out. I will get back to you ASAP</p>
            </div>

            <LoadingAlert
              className={`alert__loading ${
                showLoadingToast ? "alert-shown" : "alert__hidden--noanimate"
              }`}
              onTransitionEnd={() => setShowSuccessToast(false)}
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
            </LoadingAlert>
          </div>
        ) : (
          <FormButton type="submit" value="Send">
            Submit
          </FormButton>
        )}
      </form>
    </div>
  );
}

export default EmailForm;