import React from 'react'

const Offerstomyclients = () => {
    const offerings = [
        {
          title: "ARCHITECTURE",
          description: "If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.",
          icon: "🏙️ 🏙️"  
        },
        {
          title: "INTERIOR DESIGN",
          description: "If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.",
          icon: "🏢🏢" // Placeholder for an icon, replace with your preferred icons
        },
        {
          title: "CONCEPT DESIGN",
          description: "If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.",
          icon: "🛠️🔧" // Placeholder for an icon, replace with your preferred icons
        },
        {
            title: "ARCHITECTURE",
            description: "If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.",
            icon: "🏙️ 🏙️"  
          },
          {
            title: "INTERIOR DESIGN",
            description: "If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.",
            icon: "🏢🏢" // Placeholder for an icon, replace with your preferred icons
          },
          {
            title: "CONCEPT DESIGN",
            description: "If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.",
            icon: "🛠️🔧" // Placeholder for an icon, replace with your preferred icons
          }
      ];
    
      return (
        <div className=" py-12 mt-20">
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900">OFFERINGS TO MY CLIENTS</h2>
            <p className="mt-4 text-lg leading-6 text-gray-500 w-7/12 mx-auto">
              If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.
            </p>
    
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3  ">
              {offerings.map((val, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-5xl mb-4">{val.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{val.title}</h3>
                  <p className="mt-2 text-gray-500">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Offerstomyclients
