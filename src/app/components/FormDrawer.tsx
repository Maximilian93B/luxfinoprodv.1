'use client';


import Image from 'next/image';
import React, { useState } from 'react';

type Field = {
  label: string;
  name: string;
  type: string;
  options?: string[]; // For select inputs and checkboxes
  required?: boolean;
};

// Define the dynamic fields for each service
// Each service will have dynacim input generated based on the users selection 
// Each service will be an array of objects with string|boolean 
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
        name: 'picnicAesthetic',
        type: 'select',
        options: ['Loc 1', 'Loc 2 ', 'Loc 3'],
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
        },
        {
          label: 'Special Requests',
          name: 'specialRequests',
          type: 'textarea',
        },
      ],
  // ...other services
};

const QuoteRequestDrawer: React.FC = () => {
  // **State Declarations**
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  // **Event Handlers**

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const { name, type } = target;
    let value: string | boolean;
  
    if (type === 'checkbox') {
      value = (target as HTMLInputElement).checked;
    } else {
      value = target.value;
    }
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form data and submit
    console.log(formData);
  };

  // **Helper Function: renderDynamicFields**
  // Will render input fields based on user slection 

  const renderDynamicFields = () => {
    if (!selectedService || !serviceFields[selectedService]) return null;

    return serviceFields[selectedService].map((field, index) => {
      switch (field.type) {
        case 'select':
          return (
            <div className="form-control mb-4" key={index}>
              <label className="label">
                <span className="label-text">{field.label}</span>
              </label>
              <select
                className="select select-bordered"
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
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
            </div>
          );
        case 'checkbox':
          return (
            <div className="form-control mb-4" key={index}>
              <label className="label">
                <span className="label-text">{field.label}</span>
              </label>
              {field.options?.map((option, idx) => (
                <label className="label cursor-pointer" key={idx}>
                  <span className="label-text">{option}</span>
                  <input
                    type="checkbox"
                    name={`${field.name}-${option}`}
                    checked={formData[`${field.name}-${option}`] || false}
                    onChange={handleChange}
                    className="checkbox"
                  />
                </label>
              ))}
            </div>
          );
          case 'textarea':
        // **New case for 'textarea'**
        return (
          <div className="form-control mb-4" key={index}>
            <label className="label">
              <span className="label-text">{field.label}</span>
            </label>
            <textarea
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="textarea textarea-bordered"
              required={field.required}
            />
          </div>
        );  
        // More Cases ?? 
       default:
        // Handles 'text', 'date', 'number', etc.
        return (
          <div className="form-control mb-4" key={index}>
            <label className="label">
              <span className="label-text">{field.label}</span>
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="input input-bordered"
              required={field.required}
            />
          </div>
        );
    }
  });
  
};
  // **Return Statement (JSX)**

  // This form will have the following data input 
  /**'
   First Name 
   Last Name 
   Phone 
   Email 
   Pref Contact 
  Dynaimic rendering of input boxes based on the service that the user selects 
  ** FormFieldMapping.ts will most likely be where the form data will live 
   */
  return (
    <div className="drawer">
      <input id="quote-request-drawer" type="checkbox" className="drawer-toggle" />
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
                src={''}
                alt="Company Logo"
                className="h-16 w-auto"
                />
            </div>
          <form onSubmit={handleSubmit}>
            {/* **Static Fields** */}

             {/* First Name */}
             <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName || ''}
                onChange={handleChange}
                placeholder="First Name"
                className="input input-bordered w-3/4"
                required
              />
            </div>

            {/* Last Name */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName || ''}
                onChange={handleChange}
                placeholder="Last Name"
                className="input input-bordered w-3/4"
                required
              />
            </div>

            {/* Phone */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone || ''}
                onChange={handleChange}
                placeholder="Phone Number"
                className="input input-bordered w-3/4"
                required
              />
            </div>

            {/* Email */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email || ''}
                onChange={handleChange}
                placeholder="Email Address"
                className="input input-bordered w-3/4"
                required
              />
            </div>

            {/* Preferred Contact Method */}
            <div className="form-control mb-4 w-3/4">
              <label className="label">
                <span className="label-text">Preferred Contact Method</span>
              </label>
              <select
                className="select select-bordered"
                name="contactMethod"
                value={formData.contactMethod || ''}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
              </select>
            </div>

            {/* Date and Time */}


            {/* ...Add date and time fields... */}

            {/* **Service Selection** */}
            <div className="form-control mb-4 w-3/4">
              <label className="label">
                <span className="label-text">Select a Service</span>
              </label>
              <select
                className="select select-bordered"
                value={selectedService}
                onChange={(e) => {
                  setSelectedService(e.target.value);
                  handleChange(e); // Update formData if needed
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
                <option value="events"> Corporate Events</option>
              </select>
            </div>

            {/* **Dynamic Fields Based on Selected Service** */}
            {renderDynamicFields()}

            {/* **Additional Static Fields** */}
            {/* ...Add any other static fields needed... */}
                {/* **Company Logo** */}
            <div className="flex justify-center my-4 mt-12">
                <Image
                src={''}
                alt="Company Logo"
                className="h-16 w-auto"
                />
            </div>
            {/* **Submit Button** */}
            <button type="submit" className="btn btn-outline outline-white">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequestDrawer;
