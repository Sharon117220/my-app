import { services } from "./data/data";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-24 text-center px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to My Website
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Building amazing experiences with Next.js
        </p>
        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition">
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 text-center px-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          We are passionate about creating beautiful and functional websites
          using modern web technologies. Our goal is to deliver exceptional user
          experiences that help businesses grow.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-xl shadow-md text-center hover:-translate-y-1 transition"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
