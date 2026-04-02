import { Calendar, Clock, Mail, Phone } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: [
    "Documentation",
    "Help Center",
    "Community",
    "API Reference",
    "Status",
  ],
  Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
};
export default function Footer() {
  return (
    <footer className="hidden sm:block border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div className="col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-3 sm:mb-4">
              <div className="rounded-lg">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold">
                <span className="text-white">Code</span>
                <span className="text-blue-400">Flow</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-xs mx-auto sm:mx-0 text-sm sm:text-base">
              Transform your workflow with CodeFlow - the ultimate code editor
              for developers. Experience seamless coding, real-time
              collaboration, and powerful features that boost your productivity.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              <a
                href="#"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="#"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="#"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="#"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4">
        <p className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} CodeFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
