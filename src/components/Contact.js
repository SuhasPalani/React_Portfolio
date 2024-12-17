import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import emailjs from "emailjs-com";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideDown = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const FormContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
  background: linear-gradient(135deg, #f9fafb, #eef2ff);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  animation: ${fadeIn} 0.5s ease-in;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 24px;
  position: relative;
`;

const Label = styled.label`
  font-size: 14px;
  color: #4b5563;
  margin-bottom: 8px;
  font-weight: 600;
`;

const InputStyles = css`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid ${(props) => (props.hasError ? "#dc2626" : "#e5e7eb")};
  border-radius: 8px;
  background-color: #f9fafb;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.hasError ? "#dc2626" : "#3b82f6")};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

const Input = styled.input`
  ${InputStyles}
`;

const TextArea = styled.textarea`
  ${InputStyles}
  min-height: 120px;
  resize: vertical;
`;

const ErrorText = styled.span`
  font-size: 12px;
  color: #dc2626;
  margin-top: 4px;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const SubmitButton = styled.button`
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #3b82f6;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  }

  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`;

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
  animation: ${fadeIn} 0.3s ease-in;
`;

const PopupContent = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
  animation: ${slideDown} 0.3s ease-in;
`;

const PopupMessage = styled.p`
  font-size: 18px;
  color: ${(props) => (props.isError ? "#dc2626" : "#059669")};
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

  useEffect(() => {
    emailjs.init("A9i2oQGW-bcBf8sBA");
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    const serviceID = "default_service";
    const templateID = "template_c5vvbhc";

    emailjs.sendForm(serviceID, templateID, e.target).then(
      () => {
        setIsSubmitting(false);
        setPopupStatus("success");
        setFormData({ name: "", email: "", message: "" });
      },
      (err) => {
        setIsSubmitting(false);
        setPopupStatus("error");
        console.error(err);
      }
    );
  };

  const closePopup = () => setPopupStatus(null);

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit} noValidate>
        <FormField>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            hasError={errors.name}
            placeholder="Enter your name"
          />
          <ErrorText visible={errors.name}>{errors.name}</ErrorText>
        </FormField>
        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            hasError={errors.email}
            placeholder="Enter your email"
          />
          <ErrorText visible={errors.email}>{errors.email}</ErrorText>
        </FormField>
        <FormField>
          <Label htmlFor="message">Message</Label>
          <TextArea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            hasError={errors.message}
            placeholder="Type your message here"
          />
          <ErrorText visible={errors.message}>{errors.message}</ErrorText>
        </FormField>
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </SubmitButton>
      </StyledForm>
      {popupStatus && (
        <PopupOverlay>
          <PopupContent>
            <PopupMessage isError={popupStatus === "error"}>
              {popupStatus === "success"
                ? "Thank you! I will get back to you very shortly."
                : "Failed to send message. Please try again."}
            </PopupMessage>
            <SubmitButton onClick={closePopup}>Close</SubmitButton>
          </PopupContent>
        </PopupOverlay>
      )}
    </FormContainer>
  );
};

export default Contact;
