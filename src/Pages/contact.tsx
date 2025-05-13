import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Let's Kickstart Your Project
        </h2>
        <p className="text-gray-600 mt-2">
          Ready to take the next step? Fill out the form to schedule a
          consultation with our experts.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-wrap gap-8">
        {/* Info Section */}
        <div className="flex-1 min-w-[300px] space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl text-blue-600 mb-2">🎧</div>
            <h4 className="text-lg font-semibold text-gray-800">
              Customer Support
            </h4>
            <p className="text-gray-600">
              Need a technical Assistance?{" "}
              <a href="#" className="text-blue-600 underline">
                Contact Support
              </a>
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl text-blue-600 mb-2">🤝</div>
            <h4 className="text-lg font-semibold text-gray-800">
              Partnerships
            </h4>
            <p className="text-gray-600">
              Want to offer MetaLogic to your client?{" "}
              <a href="#" className="text-blue-600 underline">
                Become a Partner
              </a>
            </p>
          </div>
        </div>

        {/* Form Section */}
        <form className="flex-1 bg-white p-6 rounded-lg shadow-md space-y-6 min-w-[300px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-800 font-medium">Full Name*</label>
              <input
                type="text"
                placeholder="Eg: Ram Bahadur Thapa"
                className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-800 font-medium">Email*</label>
              <input
                type="email"
                placeholder="Eg: ram@mail.com"
                className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-800 font-medium">Contact*</label>
              <input
                type="text"
                placeholder="Eg: 98xxxxxxxx"
                className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-800 font-medium">Company Name</label>
              <input
                type="text"
                placeholder="Eg: Metalogic Pvt Ltd"
                className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-800 font-medium">
                Company Location
              </label>
              <input
                type="text"
                placeholder="Eg: Lalitpur, Nepal"
                className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-800 font-medium">Description*</label>
            <textarea
              placeholder="Anything particular we should know?"
              className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <div className="flex items-start">
            <input
              type="checkbox"
              id="marketing-consent"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="marketing-consent"
              className="ml-3 text-gray-600 flex-1"
            >
              I agree to receive marketing communications as described in the{" "}
              <a href="#" className="text-blue-600 underline">
                Website and Cookie Policy
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;