import emailjs from '@emailjs/browser';
import React, { useState } from 'react';

import Button from '../../Button';
import FormField from './FormField';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formData;

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID || 'service_id',
        process.env.REACT_APP_TEMPLATE_ID || 'temlate_id',
        {
          name,
          email,
          message,
        },
        process.env.REACT_APP_PUBLIC_KEY || 'api_key'
      )
      .then(() => alert('Email successfully sent!'))
      .then(() => setFormData({ name: '', email: '', message: '' }))
      .catch(() => alert('Some error occured!'));
  };

  return (
    <form className="mb-2" onSubmit={handleSubmit}>
      <div className="flex justify-between mb-2">
        <FormField
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-between mb-2">
        <FormField
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-between mb-2">
        <FormField
          name="message"
          type="textarea"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <div>
        <Button>Send</Button>
      </div>
    </form>
  );
};

export default Form;
