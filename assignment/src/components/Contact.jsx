import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen mt-20 mb-20 bg-gray-300">
      <div className="w-full p-10 mt-10  rounded-md">
        <h2 className="text-3xl mb-4 font-bold text-center">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-xl font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-3 w-full border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-xl font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-3 w-full border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-xl font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-3 w-full border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
            ></textarea>
          </div>
          <div className="d-flex flex-row justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
              Send
            </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
