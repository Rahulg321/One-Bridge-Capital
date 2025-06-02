import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  phone,
  interest,
  message,
}) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>You have received a new contact form submission from:</p>
    <ul>
      <li>
        <strong>Name:</strong> {firstName} {lastName}
      </li>
      <li>
        <strong>Email:</strong> {email}
      </li>
      <li>
        <strong>Phone:</strong> {phone}
      </li>
      <li>
        <strong>Interest:</strong> {interest}
      </li>
    </ul>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
);
