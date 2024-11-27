// components/Footer.js
const Hero = () => {
    return (
      <footer className="bg-teal-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 FurnitureShop. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Hero;
  