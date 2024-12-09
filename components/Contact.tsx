import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message Sent');
  };

  return (
    <div className="bg-transparent py-16 px-8 md:px-20 lg:px-40">
      <div className="max-w-3xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-lg shadow-lg space-y-6"
        >
          <div className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 bg-transparent border-b border-gray-600 text-gray-100 focus:outline-none focus:border-indigo-600 transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 bg-transparent border-b border-gray-600 text-gray-100 focus:outline-none focus:border-indigo-600 transition-all"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-2 bg-transparent border-b border-gray-600 text-gray-100 focus:outline-none focus:border-indigo-600 transition-all"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 bg-transparent border-b border-gray-600 text-gray-100 focus:outline-none focus:border-indigo-600 transition-all"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-500 transition-all"
          >
            Send Message
          </button>
        </form>
        <div className="mt-10 text-center text-gray-600">
          <p>
            Email:{' '}
            <a href="mailto:support@scholarsphere.com" className="text-indigo-600">
              support@scholarsphere.com
            </a>
          </p>
          <p>
            Phone:{' '}
            <a href="tel:+11234567890" className="text-indigo-600">
              +1 (123) 456-7890
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
