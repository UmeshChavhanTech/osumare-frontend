export default function Contact() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Contact Us</h2>
      <form className="max-w-xl mx-auto bg-gray-50 p-4 sm:p-6 md:p-8 rounded-xl shadow space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <textarea
          placeholder="Message"
          rows="4"
          className="w-full p-3 border border-gray-300 rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
