import React from 'react';
const testimonials = [
  {
    name: "Emilia Riska",
    role: "Customer",
    text: "The family's prices, the great atmosphere are only topped by the delicious food. Keep up the great work.",
    img: "/img/girl1.png",
  },
  {
    name: "Robert Davis",
    role: "Customer",
    text: "D'bento is simply the best. Great food, nice atmosphere and very reasonable prices. It just doesn't get any better.",
    img: "/img/boy1.png",
  },
  {
    name: "Marsha De John",
    role: "Customer",
    text: "We've been D'bento many times over the years. We know what to expect: great food, awesome price of food.",
    img: "/img/girl2.png",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-100" id="testimonials">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif italic">Our Guestbook</h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12 rounded"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
            >
              <div className="text-yellow-500 text-4xl mb-4">“</div>
              <p className="text-gray-700 italic text-base mb-6 leading-relaxed font-medium">{item.text}</p>
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-yellow-500"
              />
              <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
              <span className="text-sm text-gray-500">{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
