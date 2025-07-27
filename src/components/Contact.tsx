import { Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-navy-900 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Modern office contact background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto hidden md:block">
            Ready to secure your organization? Contact us for a comprehensive
            security assessment and customized cybersecurity solutions.
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto md:hidden">
            Ready to secure your organization? Contact us for customized
            cybersecurity solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-baby-blue/20 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-baby-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-gray-300">Info@secor.co.za</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-baby-blue/20 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-baby-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Address</h4>
                  <p className="text-gray-300">
                    78 6th Avenue Postdene
                    <br />
                    Postmasburg 8420
                    <br />
                    Northern Cape, South Africa
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-baby-blue/20 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-baby-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Business Hours
                  </h4>
                  <p className="text-gray-300">
                    Monday - Friday: 8:00 AM - 6:00 PM
                    <br />
                    Emergency Support: 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8 hidden lg:block">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send us a Message
            </h3>

            <form
              action="mailto:Info@secor.co.za"
              method="post"
              encType="text/plain"
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-400 focus:border-baby-blue focus:outline-none"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-400 focus:border-baby-blue focus:outline-none"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-400 focus:border-baby-blue focus:outline-none"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-400 focus:border-baby-blue focus:outline-none"
                  placeholder="Security Assessment Request"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-400 focus:border-baby-blue focus:outline-none resize-none"
                  placeholder="Tell us about your cybersecurity needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-baby-blue text-navy-900 py-3 px-6 rounded-lg font-semibold hover:bg-blue-200 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
