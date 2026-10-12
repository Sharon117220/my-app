export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-14 pb-5">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-lg font-bold mb-4">MyWebsite</h3>
          <p className="text-gray-400">
            Creating digital experiences that matter.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <a href="/" className="block text-gray-400 hover:text-white mb-2">
            Home
          </a>
          <a
            href="/about"
            className="block text-gray-400 hover:text-white mb-2"
          >
            About
          </a>
          <a
            href="/services"
            className="block text-gray-400 hover:text-white mb-2"
          >
            Services
          </a>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-gray-400">Email: hello@mywebsite.com</p>
          <p className="text-gray-400">Phone: (555) 123-4567</p>
        </div>
      </div>
      <div className="text-center border-t border-gray-700 pt-5 text-gray-400">
        © 2024 MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}
