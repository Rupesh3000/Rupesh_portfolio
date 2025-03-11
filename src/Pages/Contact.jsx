// src/components/Contact.jsx
import second from '../assets/contact-2.png'
function Contact() {
  return (
    <section id="contact" className="min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Contact</h1>
        <p className="text-lg mt-1 flex gap-3 justify-center">
          <i className="ri-flower-line text-indigo-600"></i> Got a question?
          Feel free to reach out!
          <i className="ri-flower-line text-indigo-600"></i>
        </p>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 mt-10 flex flex-col lg:flex-row gap-8 justify-between">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={second} // Replace with your image path
            alt="Contact Image"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto"
          />
        </div>

        {/* Right: Form */}
        <form className="w-full lg:w-1/2 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 bg-[#2A2A3E] rounded-lg border border-gray-700 focus:outline-none focus:border-indigo-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-[#2A2A3E] rounded-lg border border-gray-700 focus:outline-none focus:border-indigo-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 bg-[#2A2A3E] rounded-lg border border-gray-700 focus:outline-none focus:border-indigo-500"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
