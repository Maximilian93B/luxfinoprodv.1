'use client';

import Image from 'next/image';
import React, { useState } from 'react';



type FieldType = 'text' | 'select' | 'checkbox' | 'textarea' | 'date' | 'number' | 'time';

type Field = {
  label: string;
  name: string;
  type: FieldType;
  options?: string[]; // For select inputs and checkboxes
  required?: boolean;
  multiple?: boolean; // For checkboxes with multiple selections
};

// Define the dynamic fields for each service
const serviceFields: { [key: string]: Field[] } = {
  tables: [
    {
      label: 'Choose a Lux.Fino Table',
      name: 'luxFinoTable',
      type: 'select',
      options: ['Table 1', 'Table 2', 'Table 3'],
      required: true,
    },
    {
      label: 'Choose your picnic aesthetic',
      name: 'picnicAesthetic',
      type: 'select',
      options: ['Boho', 'Rustic', 'Modern'],
      required: true,
    },
    {
      label: 'Choose your Location',
      name: 'location',
      type: 'select',
      options: ['Loc 1', 'Loc 2', 'Loc 3'],
      required: true,
    },
    {
      label: 'Special Requests',
      name: 'specialRequests',
      type: 'textarea',
    },
    {
      label: 'Add-Ons',
      name: 'addOns',
      type: 'checkbox',
      options: ['Live Music', 'Photography', 'Extra Hour'],
      multiple: true,
    },
  ],
  luxRemote: [
    {
      label: 'Check-in Date',
      name: 'checkInDate',
      type: 'date',
      required: true,
    },
    {
      label: 'Check-out Date',
      name: 'checkOutDate',
      type: 'date',
      required: true,
    },
    {
      label: 'Special Requests',
      name: 'specialRequests',
      type: 'textarea',
    },
  ],
  inHouseChef: [
    {
      label: 'Event Date',
      name: 'eventDate',
      type: 'date',
      required: true,
    },
    {
      label: 'Event Time',
      name: 'eventTime',
      type: 'time',
      required: true,
    },
    {
      label: 'Number of Guests',
      name: 'numberOfGuests',
      type: 'number',
      required: true,
    },
    {
      label: 'Event Location',
      name: 'eventLocation',
      type: 'select',
      options: ['Venue A', 'Venue B', 'Venue C', 'Other'],
      required: true,
    },
    {
      label: 'Preferred Cuisine',
      name: 'preferredCuisine',
      type: 'select',
      options: ['Italian', 'Japanese', 'Mexican', 'Other'],
      required: true,
    },
    {
      label: 'Dietary Restrictions',
      name: 'dietaryRestrictions',
      type: 'textarea',
    },
    {
      label: 'Special Requests',
      name: 'specialRequests',
      type: 'textarea',
    },
  ],
  events: [
    {
      label: 'Event Date',
      name: 'eventDate',
      type: 'date',
      required: true,
    },
    {
      label: 'Event Time',
      name: 'eventTime',
      type: 'time',
      required: true,
    },
    {
      label: 'Number of Attendees',
      name: 'numberOfAttendees',
      type: 'number',
      required: true,
    },
    {
      label: 'Event Type',
      name: 'eventType',
      type: 'select',
      options: ['Conference', 'Workshop', 'Seminar', 'Other'],
      required: true,
    },
    {
      label: 'Additional Services',
      name: 'additionalServices',
      type: 'checkbox',
      options: ['Audio/Visual Equipment', 'Catering', 'Decorations'],
      multiple: true,
    },
    {
      label: 'Special Requests',
      name: 'specialRequests',
      type: 'textarea',
    },
  ],
  // ...other services
};

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  contactMethod: string;
  selectedService: string;
  [key: string]: any; // For dynamic fields
};

type QuoteRequestDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const QuoteRequestDrawer: React.FC<QuoteRequestDrawerProps> = ({isOpen, onClose}) => {
  // **State Declarations**

  const [selectedService, setSelectedService] = useState<string>('');

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    contactMethod: '',
    selectedService: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState<string>('');

  // **Event Handlers**


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const { name, type, value } = target;

    setFormData((prevData) => {
      if (type === 'checkbox') {
        const checked = (target as HTMLInputElement).checked;
        const currentValues = prevData[name] || [];
        if (checked) {
          return {
            ...prevData,
            [name]: [...currentValues, value],
          };
        } else {
          return {
            ...prevData,
            [name]: currentValues.filter((item: string) => item !== value),
          };
        }
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  // Basic form validation
  const validateFormData = (data: FormData) => {
    const newErrors: { [key: string]: string } = {};

    // Validate required fields
    if (!data.firstName) newErrors.firstName = 'First Name is required.';
    if (!data.lastName) newErrors.lastName = 'Last Name is required.';
    if (!data.phone) newErrors.phone = 'Phone number is required.';
    if (!data.email) newErrors.email = 'Email is required.';
    if (!data.contactMethod) newErrors.contactMethod = 'Preferred contact method is required.';
    if (!data.selectedService) newErrors.selectedService = 'Please select a service.';

    // Validate dynamic fields
    if (selectedService && serviceFields[selectedService]) {
      serviceFields[selectedService].forEach((field) => {
        if (field.required && !data[field.name]) {
          newErrors[field.name] = `${field.label} is required.`;
        }
      });
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage('');
    } else {
      // Form is valid, submit data
      console.log(formData);
      setErrors({});
      setSuccessMessage('Your quote request has been submitted successfully!');
      // Reset form or redirect as needed
    }
  };

  // **Reusable Input Components**

  const InputField: React.FC<{ field: Field; value: any; onChange: any; error?: string }> = ({
    field,
    value,
    onChange,
    error,
  }) => (
    <div className="form-control mb-4">
      <label className="label" htmlFor={field.name}>
        <span className="label-text">{field.label}</span>
      </label>
      <input
        id={field.name}
        type={field.type}
        name={field.name}
        value={value}
        onChange={onChange}
        className={`input input-bordered ${error ? 'input-error' : ''}`}
        required={field.required}
      />
      {error && <p className="text-error">{error}</p>}
    </div>
  );

  const SelectField: React.FC<{ field: Field; value: any; onChange: any; error?: string }> = ({
    field,
    value,
    onChange,
    error,
  }) => (
    <div className="form-control mb-4">
      <label className="label" htmlFor={field.name}>
        <span className="label-text">{field.label}</span>
      </label>
      <select
        id={field.name}
        className={`select select-bordered ${error ? 'select-error' : ''}`}
        name={field.name}
        value={value}
        onChange={onChange}
        required={field.required}
      >
        <option value="" disabled>
          Select an option
        </option>
        {field.options?.map((option, idx) => (
          <option value={option} key={idx}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-error">{error}</p>}
    </div>
  );

  const TextAreaField: React.FC<{ field: Field; value: any; onChange: any; error?: string }> = ({
    field,
    value,
    onChange,
    error,
  }) => (
    <div className="form-control mb-4">
      <label className="label" htmlFor={field.name}>
        <span className="label-text">{field.label}</span>
      </label>
      <textarea
        id={field.name}
        name={field.name}
        value={value}
        onChange={onChange}
        className={`textarea textarea-bordered ${error ? 'textarea-error' : ''}`}
        required={field.required}
      />
      {error && <p className="text-error">{error}</p>}
    </div>
  );

  const CheckboxField: React.FC<{ field: Field; values: any; onChange: any; error?: string }> = ({
    field,
    values,
    onChange,
    error,
  }) => (
    <div className="form-control mb-4">
      <label className="label">
        <span className="label-text">{field.label}</span>
      </label>
      {field.options?.map((option, idx) => (
        <label className="label cursor-pointer" key={idx}>
          <input
            type="checkbox"
            name={field.name}
            value={option}
            checked={values?.includes(option) || false}
            onChange={onChange}
            className="checkbox"
          />
          <span className="label-text">{option}</span>
        </label>
      ))}
      {error && <p className="text-error">{error}</p>}
    </div>
  );

  // **Helper Function: renderDynamicFields**
  const renderDynamicFields = () => {
    if (!selectedService || !serviceFields[selectedService]) return null;

    return serviceFields[selectedService].map((field, index) => {
      const value = formData[field.name] || '';
      const error = errors[field.name];

      switch (field.type) {
        case 'select':
          return (
            <SelectField key={index} field={field} value={value} onChange={handleChange} error={error} />
          );
        case 'checkbox':
          return (
            <CheckboxField
              key={index}
              field={field}
              values={formData[field.name]}
              onChange={handleChange}
              error={error}
            />
          );
        case 'textarea':
          return (
            <TextAreaField key={index} field={field} value={value} onChange={handleChange} error={error} />
          );
        default:
          // Handles 'text', 'date', 'number', 'time', etc.
          return (
            <InputField key={index} field={field} value={value} onChange={handleChange} error={error} />
          );
      }
    });
  };

  // **Return Statement (JSX)**
  return (
    <div className="drawer">
    <input id="quote-request-drawer" 
          type="checkbox" 
          className="drawer-toggle" 
          checked={isOpen}
          onChange={onClose}
          />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="quote-request-drawer" className="btn btn-outline outline-white bg-white">
          Book Now
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="quote-request-drawer" className="drawer-overlay"></label>
        <div className="p-4 w-3/4 md:w-1/2 lg:w-1/3 bg-white text-base-content">
          <h2 className="text-xl md:text-2xl font-bold mt-4">Lux.Fino Quote Request</h2>
          <div className="flex justify-center my-4 mt-10">
            <Image
              src={'/Lux.Fino.Logo2.svg'}
              alt="Lux.Fino Company Logo"
              width={300}
              height={100}
              className="h-64 w-auto"
            />
          </div>
          <form onSubmit={handleSubmit} noValidate>
            {/* **Static Fields** */}

            {/* First Name */}
            <div className="form-control mb-4">
              <label className="label" htmlFor="firstName">
                <span className="label-text">First Name</span>
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className={`input input-bordered w-full ${errors.firstName ? 'input-error' : ''}`}
                required
              />
              {errors.firstName && <p className="text-error">{errors.firstName}</p>}
            </div>

            {/* Last Name */}
            <div className="form-control mb-4">
              <label className="label" htmlFor="lastName">
                <span className="label-text">Last Name</span>
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className={`input input-bordered w-full ${errors.lastName ? 'input-error' : ''}`}
                required
              />
              {errors.lastName && <p className="text-error">{errors.lastName}</p>}
            </div>

            {/* Phone */}
            <div className="form-control mb-4">
              <label className="label" htmlFor="phone">
                <span className="label-text">Phone</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className={`input input-bordered w-full ${errors.phone ? 'input-error' : ''}`}
                required
              />
              {errors.phone && <p className="text-error">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div className="form-control mb-4">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
                required
              />
              {errors.email && <p className="text-error">{errors.email}</p>}
            </div>

            {/* Preferred Contact Method */}
            <div className="form-control mb-4">
              <label className="label" htmlFor="contactMethod">
                <span className="label-text">Preferred Contact Method</span>
              </label>
              <select
                id="contactMethod"
                className={`select select-bordered w-full ${errors.contactMethod ? 'select-error' : ''}`}
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
              </select>
              {errors.contactMethod && <p className="text-error">{errors.contactMethod}</p>}
            </div>

            {/* **Service Selection** */}
            <div className="form-control mb-4">
              <label className="label" htmlFor="selectedService">
                <span className="label-text">Select a Service</span>
              </label>
              <select
                id="selectedService"
                className={`select select-bordered w-full ${errors.selectedService ? 'select-error' : ''}`}
                value={selectedService}
                onChange={(e) => {
                  setSelectedService(e.target.value);
                  handleChange(e); // Update formData
                }}
                name="selectedService"
                required
              >
                <option value="" disabled>
                  Choose a service
                </option>
                <option value="tables">Picnics</option>
                <option value="luxRemote">Lux-Remote</option>
                <option value="inHouseChef">Catering</option>
                <option value="events">Corporate Events</option>
              </select>
              {errors.selectedService && <p className="text-error">{errors.selectedService}</p>}
            </div>

            {/* **Dynamic Fields Based on Selected Service** */}
            {renderDynamicFields()}

            {/* **Success Message** */}
            {successMessage && <p className="text-success">{successMessage}</p>}

            {/* **Company Logo** */}
            <div className="flex justify-center my-4">
              <Image
                src={'/Lux.Fino.logo.svg'}
                alt="Lux.Fino Company Logo"
                width={350}
                height={100}
                className="h-auto"
              />
            </div>

            {/* **Submit Button** */}
            <button type="submit" className="btn btn-outline outline-white w-1/3">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequestDrawer;