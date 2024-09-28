import React from 'react';

const Testimonials = () => {
  
  const testimonials = [
    {
      text: "As conscious traveling Paup ers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face.",
      author: "FANNY SPENCER",
      rating: 5
    },
    {
      text: "As conscious traveling Paup ers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face.",
      author: "FANNY SPENCER",
      rating: 4.5
    },
    {
      text: "As conscious traveling Paup ers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face.",
      author: "FANNY SPENCER",
      rating: 4.5
    }
  ];

  return (
    <div className=" py-12 mt-20">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">TESTIMONIALS</h2>
        <p className="mt-4 text-lg leading-6 text-gray-500 w-7/12 mx-auto">
          If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3 ">
          {testimonials.map((val, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-500 italic mb-4">{val.text}</p>
              <div className="font-bold text-gray-900 mt-14">{val.author}</div>
              <div className="flex justify-center lg:justify-start mt-2">
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
