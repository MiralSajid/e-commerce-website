
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Owner & CEO",
    description:
      "John has over 20 years of experience in the furniture industry and oversees all operations at FurnitureShop.",
    image: "https://via.placeholder.com/150", 
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Sales Manager",
    description:
      "Jane leads our sales team and ensures customers find the perfect furniture for their homes.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Customer Support Lead",
    description:
      "Michael is dedicated to providing top-notch support and ensuring customer satisfaction.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Marketing Head",
    description:
      "Emily manages our marketing campaigns and ensures FurnitureShop reaches a wide audience.",
    image: "https://via.placeholder.com/150",
  },
];

const About = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="text-lg text-gray-700 mb-12">
        Welcome to FurnitureShop! We specialize in high-quality, stylish furniture for every home.
        Our mission is to bring comfort and elegance to your space.
      </p>
      <h2 className="text-2xl font-bold mb-6">Trending Products for You</h2>
      <p>Discover our <span className="font-bold mb-6">Trending Products</span> – a curated collection of the most sought-after items loved by our customers. From stylish furniture like comfortable sofas and elegant tables to modern lighting solutions like sleek lamps, we bring you the perfect blend of design and functionality. Each product is crafted with quality and care, ensuring it enhances your space while providing exceptional value. Whether you are revamping your living room or adding a touch of charm to your workspace, our trending products are here to inspire. Shop now and join the trend!</p>
      <h2 className="text-2xl font-bold mb-6 mt-4">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-center">{member.name}</h3>
            <p className="text-teal-600 text-center">{member.role}</p>
            <p className="text-gray-700 text-sm text-center mt-2">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
