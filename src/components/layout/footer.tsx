import logo from '../../assets/metalogo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-red-600 to-purple-800 text-white py-12 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Address */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="MetaLogic Logo" className="h-10 w-10" />
            <div>
              <h1 className="text-2xl font-bold">MetaLogic</h1>
              <p className="text-sm">Software Private Limited</p>
            </div>
          </div>
          <p>Saptakhel, Lalitpur (Head office)</p>
          <p>📞 +977 9851353599</p>
          <p>✉️ info@metalogic.com.np</p>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Company</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Feedback
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Partnership
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-bold mb-4">Services</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Custom Software Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Mobile App Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Cloud Computing Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Quality Assurance and Testing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                UI/UX Designing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Maintenance and Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Dev Ops
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Blockchain Solutions
              </a>
            </li>
          </ul>
        </div>

        {/* Join Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Join</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Careers at MetaLogic
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Internships
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-12 text-center">
        <h2 className="text-lg font-bold mb-4">Join us on Social Medias</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://api.whatsapp.com/send/?phone=9851353599&text&type=phone_number&app_absent=0"
            target="_blank"
            className="text-2xl hover:text-gray-300 transition-all duration-300"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://www.facebook.com/metalogicsoftware"
            target='_blank'
            className="text-2xl hover:text-gray-300 transition-all duration-300"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/metalogicsoftware/#"
            target='_blank'
            className="text-2xl hover:text-gray-300 transition-all duration-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/metalogic-software-pvt-ltd/"
            target='_blank'
            className="text-2xl hover:text-gray-300 transition-all duration-300"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm">
        © Copyright 2025 MetaLogic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;