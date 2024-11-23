"use client";
export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Header */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">QR Menu Pro</h1>
        <nav className="flex space-x-6">
          <a href="#" className="hover:text-gray-600">Community</a>
          <a href="#" className="hover:text-gray-600">Features</a>
          <a href="#" className="hover:text-gray-600">About</a>
          <a href="#" className="hover:text-gray-600">Contact</a>
        </nav>
        <a href="#" className="bg-black text-white px-4 py-2 rounded-md">Get Started</a>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-5xl font-extrabold leading-tight">
          Transform Your Menu Into a QR Code
        </h2>
        <p className="mt-4 text-lg">
          Create, customize, and share your restaurant&rsquo;s digital menu in just a few clicks.
          No hassle, no printing costs.
        </p>
        <a
          href="#"
          className="inline-block bg-black text-white px-6 py-3 rounded-md text-lg mt-8 hover:bg-gray-800"
        >
          Start for Free →
        </a>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-green-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold">Easy to Create</h3>
          <p className="mt-2">
            Generate a QR code for your menu in minutes. Simply upload your menu and customize the design.
          </p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold">Fully Customizable</h3>
          <p className="mt-2">
            Match your QR code with your brand. Change colors, add your logo, and more.
          </p>
        </div>
        <div className="bg-orange-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold">Real-Time Updates</h3>
          <p className="mt-2">
            Update your menu instantly without reprinting. Changes are live as soon as you make them.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            Join 1,000+ restaurants using QR Menu Pro to enhance their dining experience.
          </p>
        </div>
      </footer>
    </div>
  );
}