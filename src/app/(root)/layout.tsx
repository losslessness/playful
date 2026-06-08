import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="root">
      <header>
        <Header />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}