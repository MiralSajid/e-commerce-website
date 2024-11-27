const Contact = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Have questions or need assistance? Reach out to us:
      </p>
      <ul className="list-disc pl-5 mb-8">
        <li>Email: Furnitureshop@gmail.com</li>
        <li>Phone: +123 456 7890</li>
        <li>Address: 123 Furniture Lane, Design City</li>
      </ul>

      {/* Social Media Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      
        <div className="border rounded-lg shadow-lg p-4 text-center">
          <img
            src="/src/assets/images/Instalogo.png"
            alt="Instagram"
            className="mx-auto mb-4 w-18 h-20"
          />
          <h2 className="text-lg font-bold">Instagram</h2>
          <p className="text-gray-700">Follow us on Instagram</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 block"
          >
            Visit Profile
          </a>
        </div>

       
        <div className="border rounded-lg shadow-lg p-4 text-center">
          <img
            src="/src/assets/images/FBlogo.png"
            alt="Facebook"
            className="mx-auto mb-4 w-18 h-20"
          />
          <h2 className="text-lg font-bold">Facebook</h2>
          <p className="text-gray-700">Connect with us on Facebook</p>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 block"
          >
            Visit Page
          </a>
        </div>

     
        <div className="border rounded-lg shadow-lg p-4 text-center">
          <img
            src="/src/assets/images/Gmaillogo.png"
            alt="Gmail"
            className="mx-auto mb-4 w-18 h-20"
          />
          <h2 className="text-lg font-bold">Email</h2>
          <p className="text-gray-700">Reach us via email</p>
          <a
            href="mailto:Furnitureshop@gmail.com"
            className="text-blue-500 hover:underline mt-2 block"
          >
            Send an Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
