import { FaHotel, FaMoneyBillWave, FaHeadset, FaStar } from 'react-icons/fa';

const WhyUs = () => {
  const features = [
    {
      icon: <FaHotel className="text-3xl text-primary" />,
      title: 'Wide Range of Hotels',
      description: 'From luxury resorts to budget stays, find the perfect room that suits your needs.'
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-primary" />,
      title: 'Best Price Guarantee',
      description: 'Get unbeatable rates with our competitive pricing and exclusive deals.'
    },
    {
      icon: <FaHeadset className="text-3xl text-primary" />,
      title: '24/7 Support',
      description: 'Our support team is always ready to assist you anytime, anywhere.'
    },
    {
      icon: <FaStar className="text-3xl text-primary" />,
      title: 'Verified Reviews',
      description: 'Make informed choices with honest reviews from real guests.'
    }
  ];

  return (
    <section className="py-16 md:px-8 w-11/12 mx-auto">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Discover the best hotel booking experience with features crafted to make your journey smooth and memorable.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
