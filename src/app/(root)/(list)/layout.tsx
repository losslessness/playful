import Filter from "@/components/Filter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section> 
      <div className="root-product-list"> 
        <Filter />
        {children}
      </div>
    </section>
  );
}