import React from "react";

const About = () => {
  return (
    <div className=" py-12 mt-80">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:space-x-12">
        <div className="lg:w-1/2">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900">About Myself</h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Inappropriate behavior is often laughed off as "boys will be boys," but women face higher conduct standards, especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-extrabold text-indigo-600">$2.5M</div>
              <div className="text-gray-500">Total Donation</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-extrabold text-indigo-600">1465</div>
              <div className="text-gray-500">Total Projects</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-extrabold text-indigo-600">3965</div>
              <div className="text-gray-500">Total Volunteers</div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default About;
