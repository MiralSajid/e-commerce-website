// components/Testimonials.js
const Testimonials = () => {
    const testimonials = [
      {
        name: 'John Doe',
        feedback: 'Amazing quality and fantastic service!',
      },
      {
        name: 'Jane Smith',
        feedback: 'The furniture transformed my living space!',
      },
    ];
  
    return (
      <div className="bg-gray-100 p-8">
        <h2 className="text-2xl font-bold text-center mb-6">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-md shadow-md text-center w-64"
            >
              <p className="italic mb-4">{testimonial.feedback}</p>
              <h4 className="font-bold">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  