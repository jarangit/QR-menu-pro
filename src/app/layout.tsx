import NavBar from "./components/navbar";
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
        <header>{/* <TopMenu /> */}</header>
        <NavBar />
        <div className="min-h-screen">{children}</div>
        {/* Footer */}
        {/* <footer className="bg-black text-white py-6">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              Join 1,000+ restaurants using QR Menu Pro to enhance their dining
              experience.
            </p>
          </div>
        </footer> */}
      </body>
    </html>
  );
}
