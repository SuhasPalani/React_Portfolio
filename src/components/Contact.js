import React, { useState, useEffect, useCallback } from "react";
import styled, { keyframes, css } from "styled-components";
import emailjs from "emailjs-com";

import { 
  FaPaperPlane, 
  FaUser, 
  FaEnvelope, 
  FaComment, 
  FaCheckCircle, 
  FaExclamationTriangle 
} from "react-icons/fa";

// Background animation
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Page container with gradient background
const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  padding: 20px;
`;

// Form container with drop shadow and blur effect
const FormContainer = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  animation: ${fadeIn} 0.5s ease-out;
`;

// Title of the form
const FormTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

// Styling for the form
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

// Form field with icon alignment
const FormField = styled.div`
  margin-bottom: 25px;
  position: relative;
`;

// Icon wrapper positioning
const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  transition: color 0.3s ease;
`;

// Common input and textarea styles
const InputStyles = css`
  width: 100%;
  padding: 15px 15px 15px 45px;
  font-size: 16px;
  border: 2px solid transparent;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? "#ff4d4f" : "#23a6d5"};
    box-shadow: 0 0 0 3px ${props => props.hasError ? "rgba(255,77,79,0.2)" : "rgba(35,166,213,0.2)"};
    background-color: white;
  }

  &:focus + ${IconWrapper} {
    color: #23a6d5;
  }
`;

// Input field
const Input = styled.input`
  ${InputStyles}
`;

// Text area field
const TextArea = styled.textarea`
  ${InputStyles}
  min-height: 120px;
  resize: vertical;
  border-radius: 20px;
`;

// Error message styling
const ErrorText = styled.span`
  font-size: 12px;
  color: #ff4d4f;
  margin-top: 4px;
  display: block;
  padding-left: 15px;
`;

// Submit button with hover and active states
const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background: linear-gradient(45deg, #23a6d5, #23d5ab);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(35,166,213,0.4);
  }

  &:active {
    transform: translateY(-1px);
  }

  &:disabled {
    background: linear-gradient(45deg, #91d5ff, #91ffdb);
    cursor: not-allowed;
  }
`;

// Popup overlay for success/error messages
const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

// Popup content container
const PopupContent = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popupStatus, setPopupStatus] = useState(null);

  const emailJsConfig = {
    userId: "duGyQMPA15QXvU-LA",
    serviceId: "default_service",
    templateId: "template_jwoiro3",
  };

  useEffect(() => {
    emailjs.init(emailJsConfig.userId);
  }, [emailJsConfig.userId]);
  

  const validate = useCallback(() => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        emailJsConfig.serviceId, 
        emailJsConfig.templateId, 
        e.target
      )
      .then(
        () => {
          setPopupStatus("success");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error(err);
          setPopupStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const renderFormField = (name, label, type, icon) => (
    <FormField>
      <IconWrapper>{icon}</IconWrapper>
      {type === "textarea" ? (
        <TextArea
          name={name}
          id={name}
          value={formData[name]}
          onChange={handleChange}
          hasError={errors[name]}
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
      ) : (
        <Input
          type={type}
          name={name}
          id={name}
          value={formData[name]}
          onChange={handleChange}
          hasError={errors[name]}
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
      )}
      {errors[name] && <ErrorText>{errors[name]}</ErrorText>}
    </FormField>
  );

  return (
    <PageContainer>
      <FormContainer>
        <FormTitle>Get in Touch</FormTitle>
        <StyledForm onSubmit={handleSubmit} noValidate>
          {renderFormField("name", "Name", "text", <FaUser />)}
          {renderFormField("email", "Email", "email", <FaEnvelope />)}
          {renderFormField("message", "Message", "textarea", <FaComment />)}
          
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
            <FaPaperPlane />
          </SubmitButton>
        </StyledForm>

        {popupStatus && (
          <PopupOverlay>
            <PopupContent>
              {popupStatus === "success" ? (
                <>
                  <FaCheckCircle style={{ color: "#52c41a", fontSize: "48px", marginBottom: "16px" }} />
                  <p style={{ color: "#333", marginBottom: "20px", fontSize: "18px" }}>
                    Message sent successfully! I'll respond soon.
                  </p>
                </>
              ) : (
                <>
                  <FaExclamationTriangle style={{ color: "#ff4d4f", fontSize: "48px", marginBottom: "16px" }} />
                  <p style={{ color: "#333", marginBottom: "20px", fontSize: "18px" }}>
                    Message send failed. Please try again later.
                  </p>
                </>
              )}
              <SubmitButton 
                onClick={() => setPopupStatus(null)}
                style={{ width: "100%" }}
              >
                Close
              </SubmitButton>
            </PopupContent>
          </PopupOverlay>
        )}
      </FormContainer>
    </PageContainer>
  );
};

export default Contact;
