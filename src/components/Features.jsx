const features = [
  { title: 'Responsive Design', description: 'Perfect on any screen size', icon: '📱' },
  { title: 'Fast Performance', description: 'Optimized for speed and efficiency', icon: '⚡' },
  { title: 'WCAG Compliant', description: 'Built with accessibility in mind', icon: '♿' },
];

export default function Features() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 bg-gray-100 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12">Why Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white p-6 sm:p-8 rounded-xl shadow hover:shadow-xl transition"
          >
            <div className="text-4xl sm:text-5xl mb-4">{f.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-sm sm:text-base text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
