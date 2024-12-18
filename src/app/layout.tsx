import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen`}>
        {/* Header */}
        <header className="container mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">QR Menu Pro</h1>
          <nav className="flex space-x-6">
            <a href="#" className="hover:text-gray-600">
              Community
            </a>
            <a href="#" className="hover:text-gray-600">
              Features
            </a>
            <a href="#" className="hover:text-gray-600">
              About
            </a>
            <a href="#" className="hover:text-gray-600">
              Contact
            </a>
          </nav>
          <a href="#" className="bg-black text-white px-4 py-2 rounded-md">
            Start For Free
          </a>
        </header>
        <div className="min-h-screen">{children}</div>
        {/* Footer */}
        <footer className="bg-black text-white py-6">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              Join 1,000+ restaurants using QR Menu Pro to enhance their dining
              experience.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
