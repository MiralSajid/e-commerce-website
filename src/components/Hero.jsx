// components/Hero.js
const Hero = () => {
  return (
    <div className="bg-teal-700 text-white py-16 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Modern Interior Design Studio
        </h2>
        <p className="text-lg mb-6">
          Discover premium furniture that blends comfort and style.
        </p>
        <button className="bg-yellow-500 px-6 py-2 rounded-md font-semibold hover:bg-yellow-400">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
