import Link from "next/link";
import { homeData } from "../app/data/homedata";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to <span className="text-blue-500">Your Company</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          We provide top-quality services to help your business grow — Website
          Development, App Development, UI/UX Design, SEO, and more.
        </p>
        <Link
          href="/contact"
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
        >
          Get a Free Consultation
        </Link>
      </section>

      {/* Services Section */}
      <section className="py-20 w-full max-w-6xl">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeData.map(({ name, description }) => {
            return (
              <div
                key={name}
                className="border rounded-lg p-6 text-center shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-100 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            We are a passionate team with 5+ years of experience in tech. We
            have helped businesses across different industries build stunning
            digital experiences that drive results.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </main>
  );
}
