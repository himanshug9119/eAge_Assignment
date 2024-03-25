import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Name validation
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    // Contact number validation
    const contactRegex = /^[0-9]{10}$/;
    if (!contactRegex.test(formData.contact)) {
      newErrors.contact = "Invalid contact number";
    }

    // Check if any required field is empty
    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.contact.trim() === ""
    ) {
      newErrors.form = "Please fill out all the required fields";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If all validations pass, you can proceed with form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="p-6 registerbox">
      <h1 className="text-4xl font-bold mb-8 registerhead text-white flex flex-row justify-center">
        REGISTER FOR <span className="ml-2"> FREE DEMO</span>
      </h1>
      <div className="text-2xl">
        {errors.form && <p className="text-red-700 mb-2">{errors.form}</p>}
        {errors.name && <p className="text-red-700 mb-2">{errors.name}</p>}
        {errors.email && <p className="text-red-700 mb-2">{errors.email}</p>}
        {errors.contact && (
          <p className="text-red-700 mb-2">{errors.contact}</p>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Phone Number *"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          <div className="topformcheck text-white pt-3 pb-3">
            <input type="checkbox" className="mr-2" checked value="1" />
            <span className="text-lg text-white">
              By clicking submit, I agree with the{" "}
              <i className="text-white">Terms Of Use</i>
              <sup> *</sup>
            </span>
          </div>
          <div className="align-item-center justify-center flex w-full text-3xl font-bold m-4">
            <button type="submit" className="submitbtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
